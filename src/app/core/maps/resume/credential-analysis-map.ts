import { ModelBase } from "../../models/model-base";
import { ModelBaseMap } from "../model-base-map";
import { ModelMap } from "../model-map";
import { ModelMapConverter as convert } from "../model-map-converter";
import { CredentialAnalysis } from "../../models/resume/credential-analysis";

export class CredentialAnalysisMap implements ModelMap {
    public objToModel(obj: any): CredentialAnalysis {
        let credentialAnalysis = {
            nameOnCredential: (obj["name-on-credential"]) ? convert.objToModel<ModelBase>(
                obj["name-on-credential"], new ModelBaseMap()) : {} as ModelBase,
            ref: (obj["ref"])? convert.objToModel<ModelBase>(
                obj["ref"], new ModelBaseMap()) : {} as ModelBase,
            credentialAuthentication: (obj["credential-authentication"])? convert.objToModel<ModelBase>(
                obj["credential-authentication"], new ModelBaseMap()) : {} as ModelBase,
            country: (obj["country"])? convert.objToModel<ModelBase>(
                obj["country"], new ModelBaseMap()) : {} as ModelBase,
            credential: (obj["credential"])? convert.objToModel<ModelBase>(
                obj["credential"], new ModelBaseMap()) : {} as ModelBase,
            major: (obj.major)? convert.objToModel<ModelBase>(
                obj.major, new ModelBaseMap()) : {} as ModelBase,
            canadianEquivalency: (obj["canadian-equivalency"])? convert.objToModel<ModelBase>(
                obj["canadian-equivalency"], new ModelBaseMap()) : {} as ModelBase,
            year: (obj["year"])? convert.objToModel<ModelBase>(
                obj["year"], new ModelBaseMap()) : {} as ModelBase,
            awardedBy: (obj["awarded-by"])? convert.objToModel<ModelBase>(
                obj["awarded-by"], new ModelBaseMap()) : {} as ModelBase,
            status: (obj["status"])? convert.objToModel<ModelBase>(
                obj["status"], new ModelBaseMap()) : {} as ModelBase
        }
        return credentialAnalysis as CredentialAnalysis;
    }

    public modelToObj(credentialAnalysis: CredentialAnalysis): any {
        return {
            "name-on-credential": convert.modelToObj<ModelBase>(
                credentialAnalysis.nameOnCredential, new ModelBaseMap()),
            "ref": convert.modelToObj<ModelBase>(
                credentialAnalysis.ref, new ModelBaseMap()),
            "credential-authentication": convert.modelToObj<ModelBase>(
                credentialAnalysis.credentialAuthentication, new ModelBaseMap()),
            "country": convert.modelToObj<ModelBase>(
                credentialAnalysis.country, new ModelBaseMap()),
            "credential": convert.modelToObj<ModelBase>(
                credentialAnalysis.credential, new ModelBaseMap()),
            "major": convert.modelToObj<ModelBase>(
                credentialAnalysis.major, new ModelBaseMap()),
            "canadian-equivalency": convert.modelToObj<ModelBase>(
                credentialAnalysis.canadianEquivalency, new ModelBaseMap()),
            "year": convert.modelToObj<ModelBase>(
                credentialAnalysis.year, new ModelBaseMap()),
            "awarded-by": convert.modelToObj<ModelBase>(
                credentialAnalysis.awardedBy, new ModelBaseMap()),
            "status": convert.modelToObj<ModelBase>(
                credentialAnalysis.status, new ModelBaseMap())
        };
    }
}