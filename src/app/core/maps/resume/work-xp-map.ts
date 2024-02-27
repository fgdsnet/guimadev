import { ModelBase } from "../../models/model-base";
import { JobPeriod } from "../../models/resume/job-period";
import { WorkXP } from "../../models/resume/work-xp";
import { ModelBaseMap } from "../model-base-map";
import { ModelMap } from "../model-map";
import { ModelMapConverter as convert } from "../model-map-converter";
import { JobLocation } from './../../models/resume/job-location';
import { JobLocationMap } from "./job-location-map";
import { JobPeriodMap } from "./job-period-map";

export class WorkXPMap implements ModelMap {
    public objToModel(obj: any): WorkXP {
        let workXP = {
            position: (obj.position) ? convert.objToModel<ModelBase>(
                obj.position, new ModelBaseMap()) : {} as ModelBase,
            company: (obj.company) ? convert.objToModel<ModelBase>(
                obj.company, new ModelBaseMap()) : {} as ModelBase,
            type: (obj.type) ? convert.objToModel<ModelBase>(
                obj.type, new ModelBaseMap()) : {} as ModelBase,
            jobPeriod: (obj["job-period"]) ? convert.objToModel<JobPeriod>(
                obj["job-period"], new JobPeriodMap()) : {} as JobPeriod,
            jobLocation: (obj["job-location"]) ? convert.objToModel<JobLocation>(
                obj["job-location"], new JobLocationMap()) : {} as JobLocation,
            achievements: (obj.achievements) ? convert.objToModelList<ModelBase>(
                obj.achievements, new ModelBaseMap()) : [] as ModelBase[]
        }
        return workXP as WorkXP;
    }

    public modelToObj(workXP: WorkXP): any {
        return { position: convert.modelToObj<ModelBase>(
                workXP.position, new ModelBaseMap()),
            company: convert.modelToObj<ModelBase>(
                workXP.company, new ModelBaseMap()),
            type: convert.modelToObj<ModelBase>(
                workXP.type, new ModelBaseMap()),
            "job-period": convert.modelToObj<JobPeriod>(
                workXP.jobPeriod, new JobPeriodMap()),
            "job-location": convert.modelToObj<JobLocation>(
                workXP.jobLocation, new JobLocationMap())
        };
    }
}