import { ModelBase } from "../models/model-base";

export interface ModelMap {
    objToModel(obj: any): ModelBase;
    modelToObj(model: ModelBase): any;
}