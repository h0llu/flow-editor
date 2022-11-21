import { useState, useRef } from "react";
import ReactFlow, { addEdge, removeElements, isNode } from "react-flow-renderer";

import KafkaSourceNode from "../ReactFlow/Nodes/KafkaSourceNode";
import FilterNode from "../ReactFlow/Nodes/FilterNode";
import AddVariable from "../ReactFlow/Nodes/AddVariableNode";
import DeleteVariable from "../ReactFlow/Nodes/DeleteVariableNode";
import KafkaSink from "../ReactFlow/Nodes/KafkaSinkNode";

const nodeTypes = {
    kafkaSource: KafkaSourceNode,
    filter: FilterNode,
    addVariable: AddVariable,
    deleteVariable: DeleteVariable,
    kafkaSink: KafkaSink
};

let id = 2;
const getId = () => `node_${id++}`;

const DiagramAdapter = ({ nodes, setNodes, onAddNode, onAddEdge, onDelete, onActivateNode, onDeactivateAll }) => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const onLoad = (_reactFlowInstance) =>
        setReactFlowInstance(_reactFlowInstance);

    const onConnect = (params) => setNodes((els) => {
        params.type = "step";
        params.arrowHeadType = "arrowclosed";

        if (params.sourceHandle === "true") {
            params.label = "TRUE"
        } else if (params.sourceHandle === "false") {
            params.label = "FALSE"
        }

        params.style = {
            strokeWidth: "3px"
        }


        onAddEdge(params);
        return addEdge(params, els);
    });

    const onElementsRemove = (elementsToRemove) => {
        setNodes((els) => removeElements(elementsToRemove, els));
        elementsToRemove.forEach(element => { onDelete(element) });
    };

    const onSelectionChange = (elements) => {
        if (elements) {
            const selectedNodes = elements.filter((els) => isNode(els));

            if (selectedNodes.length > 0) {
                onActivateNode(selectedNodes[0].id);
            }
        }
    };

    const onPaneClick = () => onDeactivateAll();

    const onDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    };

    const onDrop = (event) => {
        event.preventDefault();

        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData("application/reactflow");
        const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        });
        const nodeId = getId();

        const newNode = {
            id: nodeId,
            type,
            position,
            data: {}
        };

        setNodes(nodes.concat(newNode));
        onAddNode(nodeId, type);
    };

    return (
        <div style={{ height: 650, border: "1pt solid #000" }} ref={reactFlowWrapper}>
            <ReactFlow
                elements={nodes}
                nodeTypes={nodeTypes}
                deleteKeyCode={46}
                onConnect={onConnect}
                onSelectionChange={onSelectionChange}
                onPaneClick={onPaneClick}
                onElementsRemove={onElementsRemove}
                onLoad={onLoad}
                onDrop={onDrop}
                onDragOver={onDragOver}
                connectionLineStyle={{
                    strokeWidth: "3px"
                }} />
        </div>
    );
}

export default DiagramAdapter;