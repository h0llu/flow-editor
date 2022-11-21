const KafkaSourcePropertyEditor = ({ codeData, updateData }) => {
    const localData = codeData.data;

    const onTopicChange = (event) => {
        localData.topic = event.target.value;
        updateData(localData);
    };

    const onBootstrapServerChange = (event) => {
        localData.bootstrapServer = event.target.value;
        updateData(localData);
    };

    const onSourceNameChange = (event) => {
        localData.sourceName = event.target.value;
        updateData(localData);
    };

    const onWatermarkTypeChange = (event) => {
        localData.watermarkType = event.target.value;
        updateData(localData);
    };

    const onTimestampFieldNameChange = (event) => {
        localData.timestampFieldName = event.target.value;
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
                <strong>Source name:</strong>
                <br />
                <input name="sourceName" type="text" defaultValue={localData.sourceName} onChange={onSourceNameChange} placeholder="Source name" />
            </div>
            <div>
                <strong>Watermark type:</strong>
                <br />
                <input name="watermarkType" type="text" defaultValue={localData.watermarkType} onChange={onWatermarkTypeChange} placeholder="Watermark type" />
            </div>
            <div>
                <strong>Timestamp field name:</strong>
                <br />
                <input name="timestampFieldName" type="text" defaultValue={localData.timestampFieldName} onChange={onTimestampFieldNameChange} placeholder="Timestamp field name" />
            </div>
            <div>
                <strong>Data type:</strong>
                <br />
                <input name="dataType" type="text" defaultValue={localData.dataType} onChange={onDataTypeChange} placeholder="Data type" />
            </div>
        </div>
    );
};

export default KafkaSourcePropertyEditor;