import { ModelBase } from "../../models/model-base";
import { WorkXP } from "../../models/resume/work-xp";
import { WorkXPList } from "../../models/resume/work-xp-list";
import { ModelBaseMap } from "../model-base-map";
import { ModelMap } from "../model-map";
import { ModelMapConverter as convert } from "../model-map-converter";
import { WorkXPMap } from "./work-xp-map";

export class WorkXPListMap implements ModelMap {
    public objToModel(obj: any): WorkXPList {
        let workXPList = {
            list: (obj.list) ? convert.objToModelList<WorkXP>(
                obj.list, new WorkXPMap()) : {} as WorkXP[]
        }
        return workXPList as WorkXPList;
    }

    public modelToObj(workXPList: WorkXPList): any {
        return {
            list: convert.modelToObjList<WorkXP>(
                workXPList.list, new WorkXPMap())
        };
    }
}