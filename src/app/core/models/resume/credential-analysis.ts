import { ModelBase } from '../model-base';

export interface CredentialAnalysis extends ModelBase{
    nameOnCredential: ModelBase;
    ref: ModelBase;
    credentialAuthentication: ModelBase;
    country: ModelBase;
    credential: ModelBase;
    major: ModelBase;
    canadianEquivalency: ModelBase;
    year: ModelBase;
    awardedBy: ModelBase;
    status: ModelBase;
}