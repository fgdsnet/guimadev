import { ModelBase } from "../model-base";
import { TechnicalExpertise } from "./technical-expertise";

export interface ProfessionalProfile extends ModelBase{
    technicalExpertise: TechnicalExpertise;
}