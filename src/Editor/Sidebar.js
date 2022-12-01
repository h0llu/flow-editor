import React from "react";

import "./sidebar.css"

const Sidebar = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData("application/reactflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
    };

    return (
        <aside>
            <div className="node" onDragStart={(event) => onDragStart(event, "kafkaSource")} draggable>
                Kafka source
            </div>
            <div className="node" onDragStart={(event) => onDragStart(event, "fileSource")} draggable>
                File source
            </div>
            <div className="node" onDragStart={(event) => onDragStart(event, "filter")} draggable>
                Filter
            </div>
            <div className="node" onDragStart={(event) => onDragStart(event, "map")} draggable>
                Map
            </div>
            <div className="node" onDragStart={(event) => onDragStart(event, "addVariable")} draggable>
                Add variable
            </div>
            <div className="node" onDragStart={(event) => onDragStart(event, "deleteVariable")} draggable>
                Delete variable
            </div>
            <div className="node" onDragStart={(event) => onDragStart(event, "kafkaSink")} draggable>
                Kafka sink
            </div>
            <div className="node" onDragStart={(event) => onDragStart(event, "fileSink")} draggable>
                File sink
            </div>

        </aside>
    );
};

export default Sidebar;