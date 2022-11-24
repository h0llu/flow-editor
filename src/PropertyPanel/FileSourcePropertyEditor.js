import SchemaPropertyEditor from "./SchemaPropertyEditor";

const FileSourcePropertyEditor = ({ codeData, updateData }) => {
    const localData = codeData.data;


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

    const onFilePathChange = (event) => {
        localData.filePath = event.target.value;
        updateData(localData);
    }

    return (
        <div>
            <div>
                <strong>Source name:</strong>
                <br />
                <input name="sourceName" type="text" defaultValue={localData.sourceName} onChange={onSourceNameChange} placeholder="Source name" />
            </div>
            <div>
                <strong>File path:</strong>
                <br />
                <input name="filePath" type="text" defaultValue={localData.filePath} onChange={onFilePathChange} placeholder="File path" />
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
            <br />
            <div>
                <strong>Schema:</strong>
                <br />
                <SchemaPropertyEditor codeData={codeData} updateData={updateData} />
            </div>
        </div>
    );
};

export default FileSourcePropertyEditor;