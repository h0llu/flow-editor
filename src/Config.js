import KafkaSourcePropertyEditor from "./PropertyPanel/KafkaSourcePropertyEditor";
import FilterPropertyEditor from "./PropertyPanel/FilterPropertyEditor";
import KafkaSinkPropertyEditor from "./PropertyPanel/KafkaSinkPropertyEditor";
import AddVariablePropertyEditor from "./PropertyPanel/AddVariablePropertyEditor";
import DeleteVariablePropertyEditor from "./PropertyPanel/DeleteVariablePropertyEditor";


const Config = {
    kafkaSource: {
        propertyEditorComponent: KafkaSourcePropertyEditor
    },
    filter: {
        propertyEditorComponent: FilterPropertyEditor
    },
    kafkaSink: {
        propertyEditorComponent: KafkaSinkPropertyEditor
    },
    addVariable: {
        propertyEditorComponent: AddVariablePropertyEditor
    },
    deleteVariable: {
        propertyEditorComponent: DeleteVariablePropertyEditor
    }
}

export default Config;