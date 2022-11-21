import IfPropertyEditor from "./PropertyPanel/IfPropertyEditor";
import AssignPropertyEditor from "./PropertyPanel/AssignPropertyEditor";
import LogPropertyEditor from "./PropertyPanel/LogPropertyEditor";
import KafkaSourcePropertyEditor from "./PropertyPanel/KafkaSourcePropertyEditor";
import FilterPropertyEditor from "./PropertyPanel/FilterPropertyEditor";
import KafkaSinkPropertyEditor from "./PropertyPanel/KafkaSinkPropertyEditor";
import AddVariablePropertyEditor from "./PropertyPanel/AddVariablePropertyEditor";
import DeleteVariablePropertyEditor from "./PropertyPanel/DeleteVariablePropertyEditor";


const Config = {
    if: {
        propertyEditorComponent: IfPropertyEditor
    },
    assign: {
        propertyEditorComponent: AssignPropertyEditor
    },
    log: {
        propertyEditorComponent: LogPropertyEditor
    },
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