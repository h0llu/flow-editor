import KafkaSourcePropertyEditor from "./PropertyPanel/KafkaSourcePropertyEditor";
import FilterPropertyEditor from "./PropertyPanel/FilterPropertyEditor";
import KafkaSinkPropertyEditor from "./PropertyPanel/KafkaSinkPropertyEditor";
import AddVariablePropertyEditor from "./PropertyPanel/AddVariablePropertyEditor";
import DeleteVariablePropertyEditor from "./PropertyPanel/DeleteVariablePropertyEditor";
import FileSourcePropertyEditor from "./PropertyPanel/FileSourcePropertyEditor";
import FileSinkPropertyEditor from "./PropertyPanel/FileSinkPropertyEditor";


const Config = {
    kafkaSource: {
        propertyEditorComponent: KafkaSourcePropertyEditor
    },
    fileSource: {
        propertyEditorComponent: FileSourcePropertyEditor
    },
    filter: {
        propertyEditorComponent: FilterPropertyEditor
    },
    kafkaSink: {
        propertyEditorComponent: KafkaSinkPropertyEditor
    },
    fileSink: {
        propertyEditorComponent: FileSinkPropertyEditor
    },
    addVariable: {
        propertyEditorComponent: AddVariablePropertyEditor
    },
    deleteVariable: {
        propertyEditorComponent: DeleteVariablePropertyEditor
    }
}

export default Config;