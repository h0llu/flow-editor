import { Handle } from "react-flow-renderer";

const KafkaSourceNode = ({ data, isConnectable }) => {
    return (
        <div className="node">
            <div>
                <strong>Kafka Source</strong>
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

export default KafkaSourceNode;