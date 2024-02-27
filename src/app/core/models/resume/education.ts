import { ModelBase } from "../model-base";
import { CredentialAnalysis } from "./credential-analysis";

export interface Education extends ModelBase {
    credentialAnalysis:      CredentialAnalysis;
}
