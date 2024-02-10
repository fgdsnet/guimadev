import { ModelBase } from "./model-base";
import { TechnicalExpertise } from "./tecnical-expertise";

export interface ProfessionalProfile extends ModelBase{
    technicalExpertise: TechnicalExpertise;
}