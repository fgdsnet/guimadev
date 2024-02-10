import { ModelBase } from "./model-base";
import { Certification } from "./certification" 

export interface CertificationList extends ModelBase {
    list:      Certification[];
}
