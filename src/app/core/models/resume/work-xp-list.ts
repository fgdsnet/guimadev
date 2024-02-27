import { ModelBase } from "../model-base";
import { WorkXP } from "./work-xp";

export interface WorkXPList extends ModelBase {
    list:      WorkXP[];
}