const SchemaPropertyEditor = ({ codeData, updateData }) => {
    if (codeData.data.schema === undefined) {
        codeData.data.schema = { dataType: "", fields: [] };
    }
    const localData = codeData.data;

    const onDataTypeChange = (event) => {
        localData.schema.dataType = event.target.value;
        updateData(localData);
        // updateData({
        //     ...localData,
        //     schema: {
        //         ...localData.schema,
        //         dataType: event.target.value
        //     }
        // });
    }

    const onFieldNameChangeWithIndex = (index) => {
        return (event) => {
            localData.schema.fields[index].name = event.target.value;
            updateData(localData);
        }
    }

    const onFieldTypeChangeWithIndex = (index) => {
        return (event) => {
            localData.schema.fields[index].type = event.target.value;
            updateData(localData);
        }
    }

    const addField = () => {
        localData.schema.fields.push({
            name: "",
            type: ""
        });
        updateData({ ...localData });
    }

    const deleteField = (i) => {
        localData.schema.fields.splice(i, 1);
        updateData(localData);
    }

    return (
        <div>
            <div>
                <strong>Data type:</strong>
                <br />
                <input name="dataType" type="text" defaultValue={localData.schema.dataType} onChange={onDataTypeChange} placeholder="Data type" />
            </div>
            <div>
                <strong>Fields:</strong>
                <div>
                    {localData.schema.fields.map((field, index) => (
                        <div>
                            < strong > Field {index + 1}</strong>
                            <br />
                            <input name="fieldName" type="text" defaultValue={field.name} onChange={onFieldNameChangeWithIndex(index)} placeholder="Field name" />
                            <br />
                            <input name="fieldType" type="text" defaultValue={field.type} onChange={onFieldTypeChangeWithIndex(index)} placeholder="Field type" />
                            <br />
                            <button type="button" onClick={() => deleteField(index)}>Remove</button>
                        </div>
                    ))}
                </div>
                <button type="button" onClick={() => addField()}>+</button>
            </div>
        </div >
    );
};

export default SchemaPropertyEditor;