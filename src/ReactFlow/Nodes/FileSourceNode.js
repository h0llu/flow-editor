import { Handle } from "react-flow-renderer";

const FileSourceNode = ({ data, isConnectable }) => {
    return (
        <div className="node">
            <div>
                <strong>File Source</strong>
            </div>
            <Handle
                id="out"
                type="source"
                position="bottom"
                isConnectable={isConnectable}
            />
        </div>
    );
};

export default FileSourceNode;