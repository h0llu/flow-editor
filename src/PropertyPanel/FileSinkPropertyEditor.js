const FileSinkPropertyEditor = ({ codeData, updateData }) => {
    const localData = codeData.data;

    const onDirectoryPathChange = (event) => {
        localData.directoryPath = event.target.value;
        updateData(localData);
    };

    const onDataTypeChange = (event) => {
        localData.dataType = event.target.value;
        updateData(localData);
    }

    return (
        <div>
            <div>
                <strong>Directory path:</strong>
                <br />
                <input name="directoryPath" type="text" defaultValue={localData.directoryPath} onChange={onDirectoryPathChange} placeholder="Directory path" />
            </div>
            <div>
                <strong>Data type:</strong>
                <br />
                <input name="dataType" type="text" defaultValue={localData.dataType} onChange={onDataTypeChange} placeholder="Data type" />
            </div>
        </div>
    );
};

export default FileSinkPropertyEditor;