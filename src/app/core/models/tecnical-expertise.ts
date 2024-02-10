import { ModelBase } from "./model-base";
import { Skill } from "./skill";

export interface TechnicalExpertise extends ModelBase {
    skills:      Skill[];
}