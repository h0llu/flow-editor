import { Handle } from "react-flow-renderer";

const FilterNode = ({ data, isConnectable }) => {
    return (
        <div className="node">
            <Handle
                id="in"
                type="target"
                position="top"
                isConnectable={isConnectable}
            />
            <div>
                <strong>Filter</strong>
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

export default FilterNode;