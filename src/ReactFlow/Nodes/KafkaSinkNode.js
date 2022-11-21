import { Handle } from "react-flow-renderer";

const KafkaSinkNode = ({ data, isConnectable }) => {
    return (
        <div className="node">
            <div>
                <strong>Kafka sink</strong>
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

export default KafkaSinkNode;