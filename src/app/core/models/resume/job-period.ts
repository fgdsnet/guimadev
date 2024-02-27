import { ModelBase } from "../model-base";

export interface JobPeriod extends ModelBase {
    startDate:    ModelBase;
    endDate:   ModelBase;
    current: boolean;
}