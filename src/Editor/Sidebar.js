import React from "react";

import "./sidebar.css"

const Sidebar = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData("application/reactflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
    };

    return (
        <aside>
            {/* <div className="node node-start" onDragStart={(event) => onDragStart(event, "start")} draggable>
                Start
            </div>
            <div className="node node-if" onDragStart={(event) => onDragStart(event, "if")} draggable>
                If
            </div>
            <div className="node node-assign" onDragStart={(event) => onDragStart(event, "assign")} draggable>
                Assign
            </div>
            <div className="node node-log" onDragStart={(event) => onDragStart(event, "log")} draggable>
                Log
            </div>
            <div className="node node-end" onDragStart={(event) => onDragStart(event, "end")} draggable>
                End
            </div> */}
            <div className="node" onDragStart={(event) => onDragStart(event, "kafkaSource")} draggable>
                Kafka source
            </div>
            <div className="node" onDragStart={(event) => onDragStart(event, "filter")} draggable>
                Filter
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

        </aside>
    );
};

export default Sidebar;