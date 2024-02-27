import { ModelBase } from "../../models/model-base";
import { ModelBaseMap } from "../model-base-map";
import { ModelMap } from "../model-map";
import { ModelMapConverter as convert } from "../model-map-converter";
import { Education } from "../../models/resume/education";
import { CredentialAnalysis } from "../../models/resume/credential-analysis";
import { CredentialAnalysisMap } from "./credential-analysis-map";

export class EducationMap implements ModelMap {
    public objToModel(obj: any): Education {
        let education = {
            credentialAnalysis: (obj["credential-analysis"]) ? convert.objToModel<CredentialAnalysis>(
                obj["credential-analysis"], new CredentialAnalysisMap()) : {} as CredentialAnalysis
        }
        return education as Education;
    }

    public modelToObj(education: Education): any {
        return { ...convert.modelToObj<ModelBase>(
            education, new ModelBaseMap()),
            "credential-analysis": convert.modelToObj<CredentialAnalysis>(
                education.credentialAnalysis, new CredentialAnalysisMap())
        };
    }
}