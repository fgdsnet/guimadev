import { Skill } from "../../models/resume/skill";
import { ModelMapConverter } from "../model-map-converter";
import { ModelMap } from "../model-map";
import { ModelBase } from "../../models/model-base";
import { ModelBaseMap } from "../model-base-map";

export class SkillMap implements ModelMap {
    public objToModel(obj: any): Skill {
        let skill= { level: (obj.level)? obj.level: "" }
        return skill as Skill;
    }

    public modelToObj(skill: Skill): any {
        return { level: skill.level };
    }
}