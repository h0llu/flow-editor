import React, { useState } from "react";

import "./nodes.css";
import Config from "../Config";
import Sidebar from "./Sidebar";
import DiagramAdapter from "./DiagramAdapter";
import Jsonifier from "../NodesToJson/Jsonifier";
import { isNode, isEdge } from "react-flow-renderer";


const Canvas = () => {
    const [nodes, setNodes] = useState([]);

    const [codeData, setCodeData] = useState({});

    const [outputJson, setOutputJson] = useState({
        scenarioConfig: {
            "jobName": "Test scenario",
            "description": "Test scenario description",
            "parallelism": 1
        },
        nodes: [],
        edges: []

    });

    const [activeCodeData, setActiveCodeData] = useState({ id: null, type: "" });

    const onActivateNode = (activeNodeId) => setActiveCodeData(codeData[activeNodeId]);

    const onDeactivateAll = () => {
        setActiveCodeData({ id: null, type: "" });
    };

    const onUpdateCodeData = (data) => {
        activeCodeData.data = data;
        codeData[data.id] = activeCodeData;

        setActiveCodeData(activeCodeData);
        setCodeData(codeData);

        console.log(activeCodeData);

        let node = outputJson.nodes.filter(node => node.name === activeCodeData.id)[0];
        onDelete(activeCodeData);
        outputJson.nodes.push({ ...node, ...data });
        setOutputJson(outputJson);
    };

    const onAddNode = (newNodeId, newNodeType) => {
        codeData[newNodeId] = {
            id: newNodeId,
            type: newNodeType,
            data: {}
        };

        setCodeData(codeData);

        let node = {
            name: newNodeId
        };

        if (newNodeType === "kafkaSource") {
            node.type = "source";
            node.sourceType = "kafkaSource";
        } else if (newNodeType === "fileSource") {
            node.type = "source";
            node.sourceType = "fileSource";
        } else if (newNodeType === "filter") {
            node.type = "transform";
            node.transformType = "filter";
        } else if (newNodeType === "map") {
            node.type = "transform";
            node.transformType = "map";
        } else if (newNodeType === "addVariable") {
            node.type = "transform";
            node.transformType = "addVariable";
        } else if (newNodeType === "deleteVariable") {
            node.type = "transform";
            node.transformType = "deleteVariable";
        } else if (newNodeType === "kafkaSink") {
            node.type = "sink";
            node.sinkType = "kafkaSink";
        } else if (newNodeType === "fileSink") {
            node.type = "sink";
            node.sinkType = "fileSink";
        }

        outputJson.nodes.push(node);
        setOutputJson(outputJson);
    };

    const onAddEdge = (edgeObject) => {
        outputJson.edges.push({
            source: edgeObject.source,
            target: edgeObject.target
        });

        setOutputJson(outputJson);
    }

    const onDelete = (objectToDelete) => {
        if (isEdge(objectToDelete)) {
            outputJson.edges.splice(outputJson.edges.findIndex(
                item =>
                    item.source === objectToDelete.source &&
                    item.target === objectToDelete.target), 1
            )
        } else {
            outputJson.nodes.splice(outputJson.nodes.findIndex(
                item => item.name === objectToDelete.id), 1
            )
        }
        setOutputJson(outputJson);
    };

    const renderPropertyEditor = () => {
        if (activeCodeData.id !== null && Config[activeCodeData.type]) {
            const PropertyEditor = Config[activeCodeData.type].propertyEditorComponent;
            return (<PropertyEditor key={activeCodeData.id} codeData={activeCodeData} updateData={onUpdateCodeData} />);
        } else {
            return (<em>Select an element from the canvas to update.</em>);
        }
    }

    return (
        <div className="container-fluid pt-3">
            <div className="row">
                <div className="col col-1">
                    <h2>Tools</h2>
                    <Sidebar />
                </div>
                <div className="col col-7">
                    <h2>Canvas</h2>
                    <DiagramAdapter nodes={nodes} setNodes={setNodes} onAddNode={onAddNode} onAddEdge={onAddEdge} onDelete={onDelete} onActivateNode={onActivateNode} onDeactivateAll={onDeactivateAll} />
                </div>
                <div className="col col-4">
                    <h2>Property Panel</h2>
                    {renderPropertyEditor()}
                    <br /><br />
                    <h2>JSON</h2>
                    <Jsonifier outputJson={outputJson} />
                </div>
            </div>
        </div>
    );
}

export default Canvas;