const DeleteVariablePropertyEditor = ({ codeData, updateData }) => {
    const localData = codeData.data;

    const onVariableNameChange = (event) => {
        localData.variableName = event.target.value;
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
        </div>
    );
};

export default DeleteVariablePropertyEditor;