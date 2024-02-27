import { CertificationList } from "../../models/resume/certification-list";
import { ProfessionalProfile } from "../../models/resume/professional-profile";
import { Resume } from "../../models/resume/resume";
import { WorkXPList } from "../../models/resume/work-xp-list";
import { Contact } from './../../models/resume/contact';
import { Education } from './../../models/resume/education';
import { ContactMap } from "./contact-map";
import { HighlightMap } from './highlight-map'
import { ModelMapConverter } from '../model-map-converter';
import { Highlight } from './../../models/resume/highlight';
import { ModelMap } from "../model-map";
import { ProfessionalProfileMap } from "./professional-profile-map";
import { WorkXPListMap } from "./work-xp-list-map";
import { EducationMap } from "./education-map";
import { CertificationListMap } from "./certification-list-map";

export class ResumeMap implements ModelMap {

    public objToModel(obj: any): Resume {
        let resume = {
            highlights: (obj.highlights) ? ModelMapConverter.objToModelList<Highlight>(
                obj.highlights, new HighlightMap()): Array<Highlight>(),
            contact: (obj.contact) ? ModelMapConverter.objToModel<Contact>(
                obj.contact, new ContactMap()) : {} as Contact,
            professionalProfile: (obj["professional-profile"]) ? ModelMapConverter.objToModel<ProfessionalProfile>(
                obj["professional-profile"], new ProfessionalProfileMap()) : {} as ProfessionalProfile,
            workXPList: (obj["work-xp-list"]) ? ModelMapConverter.objToModel<WorkXPList>(
                obj["work-xp-list"], new WorkXPListMap()) : {} as WorkXPList,
            education: (obj.education) ? ModelMapConverter.objToModel<Education>(
                obj.education, new EducationMap()) : {} as Education,
            certificationList: (obj["certification-list"]) ? ModelMapConverter.objToModel<CertificationList>(
                obj["certification-list"], new CertificationListMap()) : {} as CertificationList
        }
        return resume as Resume;
    }
    public modelToObj(resume: Resume): any {
        return {
            highlights: ModelMapConverter.modelToObjList<Highlight>(resume.highlights, new HighlightMap()),
            contact: ModelMapConverter.modelToObj<Contact>(resume.contact, new ContactMap()),
            "professional-profile": ModelMapConverter.modelToObj<ProfessionalProfile>(
                resume.professionalProfile, new ProfessionalProfileMap()),
            "work-xp-list": ModelMapConverter.modelToObj<WorkXPList>(
                resume.workXPList, new WorkXPListMap()),
            education: ModelMapConverter.modelToObj<Education>(
                resume.education, new EducationMap()),
            "certification-list": ModelMapConverter.modelToObj<CertificationList>(
                resume.certificationList, new CertificationListMap())
        };
    }
}