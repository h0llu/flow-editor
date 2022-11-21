const FilterPropertyEditor = ({ codeData, updateData }) => {
    const localData = codeData.data;

    const onFilterExpressionChange = (event) => {
        localData.filterExpression = event.target.value;
        updateData(localData);
    };

    return (
        <div>
            <div>
                <strong>Filter expression:</strong>
                <br />
                <input
                    name="filterExpression"
                    type="text"
                    defaultValue={localData.filterExpression}
                    onChange={onFilterExpressionChange}
                    placeholder="Filter expression" />
            </div>
        </div>
    );
};

export default FilterPropertyEditor;