import { GUID } from "../../models/guid";
import { ModelBase } from "../../models/model-base";
import { ProfessionalProfile } from "../../models/resume/professional-profile";
import { TechnicalExpertise } from "../../models/resume/technical-expertise";
import { ModelBaseMap } from "../model-base-map";
import { ModelMap } from "../model-map";
import { ModelMapConverter } from "../model-map-converter";
import { TechnicalExpertiseMap } from "./technical-expertise-map";

export class ProfessionalProfileMap implements ModelMap {
    public objToModel(obj: any): ProfessionalProfile {
        let professionalProfile = {
            technicalExpertise: (obj["technical-expertise"]) ? 
            ModelMapConverter.objToModel<TechnicalExpertise>(
                obj["technical-expertise"], new TechnicalExpertiseMap()) : 
                {} as TechnicalExpertise
        }
        return professionalProfile as ProfessionalProfile;
    }

    public modelToObj(professionalProfile: ProfessionalProfile): any {
        return {
            "technical-expertise": ModelMapConverter.modelToObj<TechnicalExpertise>(
                professionalProfile.technicalExpertise, new TechnicalExpertiseMap())
        };
    }
}