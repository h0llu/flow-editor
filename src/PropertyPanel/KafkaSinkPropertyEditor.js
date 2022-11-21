const KafkaSinkPropertyEditor = ({ codeData, updateData }) => {
    const localData = codeData.data;

    const onTopicChange = (event) => {
        localData.topic = event.target.value;
        updateData(localData);
    };

    const onBootstrapServerChange = (event) => {
        localData.bootstrapServer = event.target.value;
        updateData(localData);
    };

    const onDataTypeChange = (event) => {
        localData.dataType = event.target.value;
        updateData(localData);
    }

    return (
        <div>
            <div>
                <strong>Topic:</strong>
                <br />
                <input name="topic" type="text" defaultValue={localData.topic} onChange={onTopicChange} placeholder="Topic" />
            </div>
            <div>
                <strong>Bootstrap server:</strong>
                <br />
                <input name="bootstrap-server" type="text" defaultValue={localData.bootstrapServer} onChange={onBootstrapServerChange} placeholder="Bootstrap Server" />
            </div>
            <div>
                <strong>Data type:</strong>
                <br />
                <input name="dataType" type="text" defaultValue={localData.dataType} onChange={onDataTypeChange} placeholder="Data type" />
            </div>
        </div>
    );
};

export default KafkaSinkPropertyEditor;

// {
    //     "dataType": "json",
//   }