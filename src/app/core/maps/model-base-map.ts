import { GUID } from "../models/guid";
import { ModelBase } from './../models/model-base';
import { ModelMap } from "./model-map";

export class ModelBaseMap implements ModelMap {
    public objToModel(obj: any): ModelBase {
        let modelBase: ModelBase = {
            id: obj.id?.uuid? new GUID(obj.id.uuid) : new GUID(),
            name: (obj.name) ? obj.name: "",
            label: (obj.label) ? obj.label: "",
            description: (obj.description) ? obj.description: ""
        }
        return modelBase;
    }

    public modelToObj(modelBase: ModelBase): any {
        return { id: modelBase.id.toString(),
            name: modelBase.name,
            label: modelBase.label,
            description: modelBase.description
        };
    }
}