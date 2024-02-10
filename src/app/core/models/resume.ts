// To parse this data:
//
//   import { Convert, Resume } from "./file";
//
//   const resume = Convert.toResume(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
import { CertificationList } from "./certification-list";
import { Contact } from "./contact";
import { Education } from "./education";
import { Highlight } from "./highlight";
import { ModelBase } from "./model-base";
import { ProfessionalProfile } from "./professional-profile";
import { WorkXPList } from "./work-xp-list";

export interface Resume extends ModelBase {
    name:                ModelBase;
    highlights:          Highlight[];
    contact:             Contact;
    professionalProfile: ProfessionalProfile;
    workXPList:          WorkXPList;
    education:       Education;
    certificationList:    CertificationList;
}