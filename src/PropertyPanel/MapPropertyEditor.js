const MapPropertyEditor = ({ codeData, updateData }) => {
    const localData = codeData.data;

    const onFieldNameChange = (event) => {
        localData.fieldName = event.target.value;
        updateData(localData);
    };

    const onValueExpressionChange = (event) => {
        localData.newValueExpression = event.target.value;
        updateData(localData);
    };

    return (
        <div>
            <div>
                <strong>Field name:</strong>
                <br />
                <input
                    name="fieldName"
                    type="text"
                    defaultValue={localData.fieldName}
                    onChange={onFieldNameChange}
                    placeholder="Field name" />
            </div>
            <div>
                <strong>New value expression:</strong>
                <br />
                <input
                    name="newValueExpression"
                    type="text"
                    defaultValue={localData.newValueExpression}
                    onChange={onValueExpressionChange}
                    placeholder="New value expression" />
            </div>
        </div>
    );
};

export default MapPropertyEditor;