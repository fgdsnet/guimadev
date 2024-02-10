import { ModelBase } from "./model-base";

export interface Contact extends ModelBase {
    email:    ModelBase;
    phone:    ModelBase;
    linkedin: ModelBase;
    github:   ModelBase;
}