import { ModelBase } from "../model-base";

export interface JobLocation extends ModelBase {
    city:    ModelBase;
    state:   ModelBase;
    country: ModelBase;
}