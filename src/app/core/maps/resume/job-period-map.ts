import { ModelBase } from "../../models/model-base";
import { JobPeriod } from "../../models/resume/job-period";
import { ModelBaseMap } from "../model-base-map";
import { ModelMap } from "../model-map";
import { ModelMapConverter as convert } from "../model-map-converter";

export class JobPeriodMap implements ModelMap {
    public objToModel(obj: any): JobPeriod {
        let jobPeriod = {
            startDate: (obj["start-date"]) ? convert.objToModel<ModelBase>(
                obj["start-date"], new ModelBaseMap()) : {} as ModelBase,
            endDate: (obj["end-date"]) ? convert.objToModel<ModelBase>(
                obj["end-date"], new ModelBaseMap()) : {} as ModelBase,
            current: (obj.current) ? true : false
        }
        return jobPeriod as JobPeriod;
    }

    public modelToObj(jobPeriod: JobPeriod): any {
        return {
            "start-date": convert.modelToObj<ModelBase>(
                jobPeriod.startDate, new ModelBaseMap()),
            "end-date": convert.modelToObj<ModelBase>(
                jobPeriod.endDate, new ModelBaseMap()),
            current: jobPeriod.current
        };
    }
}