import { TechnicalExpertise } from "../../models/resume/technical-expertise";
import { Skill } from "../../models/resume/skill";
import { ModelMapConverter } from "../model-map-converter";
import { SkillMap } from "./skill-map";
import { ModelMap } from "../model-map";
import { ModelBase } from "../../models/model-base";
import { ModelBaseMap } from "../model-base-map";

export class TechnicalExpertiseMap implements ModelMap {
    public objToModel(obj: any): TechnicalExpertise {
        let technicalExpertise = { skills: (obj.skills) ? 
            ModelMapConverter.objToModelList<Skill>(obj.skills, new SkillMap()) : [],
        }
        return technicalExpertise as TechnicalExpertise;
    }

    public modelToObj(technicalExpertise: TechnicalExpertise): any {
        return {
            skills: ModelMapConverter.modelToObjList<Skill>(technicalExpertise.skills, new SkillMap())
        };
    }
}