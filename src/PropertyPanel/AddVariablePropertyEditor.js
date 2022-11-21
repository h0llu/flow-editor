const AddVariablePropertyEditor = ({ codeData, updateData }) => {
    const localData = codeData.data;

    const onVariableNameChange = (event) => {
        localData.variableName = event.target.value;
        updateData(localData);
    };

    const onVariableTypeChange = (event) => {
        localData.variableType = event.target.value;
        updateData(localData);
    };

    const onVariableExpressionChange = (event) => {
        localData.variableExpression = event.target.value;
        updateData(localData);
    };

    return (
        <div>
            <div>
                <strong>Variable name:</strong>
                <br />
                <input
                    name="variableName"
                    type="text"
                    defaultValue={localData.variableName}
                    onChange={onVariableNameChange}
                    placeholder="Variable name" />
            </div>
            <div>
                <strong>Variable type:</strong>
                <br />
                <input
                    name="variableType"
                    type="text"
                    defaultValue={localData.variableType}
                    onChange={onVariableTypeChange}
                    placeholder="Variable type" />
            </div>
            <div>
                <strong>Variable expression:</strong>
                <br />
                <input
                    name="variableExpression"
                    type="text"
                    defaultValue={localData.variableExpression}
                    onChange={onVariableExpressionChange}
                    placeholder="Variable expression" />
            </div>
        </div>
    );
};

export default AddVariablePropertyEditor;

// "variableName": "newAmount",
// "variableType": "Integer",
// "variableExpression": "amount / 3"