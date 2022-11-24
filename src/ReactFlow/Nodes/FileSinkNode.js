import { Handle } from "react-flow-renderer";

const FileSinkNode = ({ data, isConnectable }) => {
    return (
        <div className="node">
            <div>
                <strong>File sink</strong>
            </div>
            <Handle
                id="in"
                type="target"
                position="top"
                isConnectable={isConnectable}
            />
        </div>
    );
};

export default FileSinkNode;