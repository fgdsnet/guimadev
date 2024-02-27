import { ModelBase } from "../../models/model-base";
import { JobLocation } from "../../models/resume/job-location";
import { ModelBaseMap } from "../model-base-map";
import { ModelMap } from "../model-map";
import { ModelMapConverter as convert } from "../model-map-converter";

export class JobLocationMap implements ModelMap {
    public objToModel(obj: any): JobLocation {
        let jobLocation = {
            city: (obj.city) ? convert.objToModel<ModelBase>(
                obj.city, new ModelBaseMap()) : {} as ModelBase,
            state: (obj.state) ? convert.objToModel<ModelBase>(
                obj.state, new ModelBaseMap()) : {} as ModelBase,
            country: (obj.country) ? convert.objToModel<ModelBase>(
                obj.country, new ModelBaseMap()) : {} as ModelBase
        }
        return jobLocation as JobLocation;
    }

    public modelToObj(jobLocation: JobLocation): any {
        return {
            city: convert.modelToObj<ModelBase>(
                jobLocation.city, new ModelBaseMap()),
            state: convert.modelToObj<ModelBase>(
                jobLocation.state, new ModelBaseMap()),
            country: convert.modelToObj<ModelBase>(
                jobLocation.country, new ModelBaseMap())
        };
    }
}