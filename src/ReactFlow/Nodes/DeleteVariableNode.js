import { Handle } from "react-flow-renderer";

const DeleteVariableNode = ({ data, isConnectable }) => {
    return (
        <div className="node">
            <Handle
                id="in"
                type="target"
                position="top"
                isConnectable={isConnectable}
            />
            <div>
                <strong>Delete variable</strong>
            </div>
            <Handle
                id="source"
                type="out"
                position="bottom"
                isConnectable={isConnectable}
            />
        </div>
    );
};

export default DeleteVariableNode;