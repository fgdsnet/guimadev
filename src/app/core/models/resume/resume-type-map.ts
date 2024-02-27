import { Transformation as trans } from '../../Transformation';

export class ResumeTypeMap {
    // Data type mappings

    public static ResumeTypeMap: any = {
        "Resume": trans.objectOf([
            { json: "id", js: "id", type: trans.reference("GUID") },
            { json: "name", js: "name", type: "" },
            { json: "label", js: "label", type: "" },
            { json: "description", js: "description", type: "" },
            { json: "highlights", js: "highlights", type: trans.arrayOf(trans.reference("Highlight")) },
            { json: "contact", js: "contact", type: trans.reference("Contact") },
            { json: "professional-profile", js: "professionalProfile", type: trans.reference("ProfessionalProfile") },
            { json: "work-xp-list", js: "workXPList", type: trans.reference("WorkXPList") },
            { json: "education", js: "education", type: trans.reference("Education") },
            { json: "certification-list", js: "certificationList", type: trans.reference("CertificationList") },
        ], false),
        "Contact": trans.objectOf([
            { json: "id", js: "id", type: trans.reference("GUID") },
            { json: "label", js: "label", type: "" },
            { json: "description", js: "description", type: "" },
            { json: "email", js: "email", type: trans.reference("ModelBase") },
            { json: "phone", js: "phone", type: trans.reference("ModelBase") },
            { json: "linkedin", js: "linkedin", type: trans.reference("ModelBase") },
            { json: "github", js: "github", type: trans.reference("ModelBase") },
        ], false),
        "Highlight": trans.objectOf([
            { json: "id", js: "id", type: trans.reference("GUID") },
            { json: "label", js: "label", type: "" },
            { json: "description", js: "description", type: "" },
            { json: "link", js: "link", type: "" },
        ], false),
        "ProfessionalProfile": trans.objectOf([
            { json: "id", js: "id", type: trans.reference("GUID") },
            { json: "label", js: "label", type: "" },
            { json: "description", js: "description", type: "" },
            { json: "technical-expertise", js: "technicalExpertise", type: trans.reference("TechnicalExpertise") },
        ], false),
        "TechnicalExpertise": trans.objectOf([
            { json: "id", js: "id", type: trans.reference("GUID") },
            { json: "label", js: "label", type: "" },
            { json: "description", js: "description", type: "" },
            { json: "skills", js: "skills", type: trans.arrayOf(trans.reference("Skill")) },
        ], false),
        "Skill": trans.objectOf([
            { json: "id", js: "id", type: trans.reference("GUID") },
            { json: "label", js: "label", type: "" },
            { json: "description", js: "description", type: "" },
            { json: "name", js: "name", type: "" },
            { json: "level", js: "level", type: "" },
        ], false),
        "WorkXPList": trans.objectOf([
            { json: "id", js: "id", type: trans.reference("GUID") },
            { json: "label", js: "label", type: "" },
            { json: "description", js: "description", type: "" },
            { json: "list", js: "list", type: trans.arrayOf(trans.reference("WorkXP")) }
        ], false),
        "WorkXP": trans.objectOf([
            { json: "id", js: "id", type: trans.reference("GUID") },
            { json: "label", js: "label", type: "" },
            { json: "description", js: "description", type: "" },
            { json: "position", js: "position", type: trans.reference("ModelBase") },
            { json: "company", js: "company", type: trans.reference("ModelBase") },
            { json: "type", js: "type", type: trans.reference("ModelBase") },
            { json: "job-period", js: "jobPeriod", type: trans.reference("JobPeriod") },
            { json: "job-location", js: "jobLocation", type: trans.reference("JobLocation") },
            { json: "achievements", js: "achievements", type: trans.arrayOf(trans.reference("ModelBase")) },
        ], false),
        "JobPeriod": trans.objectOf([
            { json: "id", js: "id", type: trans.reference("GUID") },
            { json: "label", js: "label", type: "" },
            { json: "description", js: "description", type: "" },
            { json: "start-date", js: "startDate", type: trans.reference("ModelBase") },
            { json: "end-date", js: "endDate", type: trans.reference("ModelBase") },
            { json: "current", js: "current", type: "boolean" },
            ], false),
        "JobLocation": trans.objectOf([
            { json: "id", js: "id", type: trans.reference("GUID") },
            { json: "label", js: "label", type: "" },
            { json: "description", js: "description", type: "" },
            { json: "city", js: "city", type: trans.reference("ModelBase") },
            { json: "state", js: "state", type: trans.reference("ModelBase") },
            { json: "country", js: "country", type: trans.reference("ModelBase") },
        ], false),
        "Education": trans.objectOf([
            { json: "id", js: "id", type: trans.reference("GUID") },
            { json: "label", js: "label", type: "" },
            { json: "description", js: "description", type: "" },
            { json: "credential-analysis", js: "credentialAnalysis", type: trans.reference("CredentialAnalysis") }
        ], false),
        "CredentialAnalysis": trans.objectOf([
            { json: "id", js: "id", type: trans.reference("GUID") },
            { json: "label", js: "label", type: "" },
            { json: "description", js: "description", type: "" },
            { json: "name-on-credential", js: "nameOnCredential", type: trans.reference("ModelBase") },
            { json: "ref", js: "ref", type: trans.reference("ModelBase") },
            { json: "credential-authentication", js: "credentialAuthentication", type: trans.reference("ModelBase") },
            { json: "credential", js: "credential", type: trans.reference("ModelBase") },
            { json: "country", js: "country", type: trans.reference("ModelBase") },
            { json: "major", js: "major", type: trans.reference("ModelBase") },
            { json: "canadian-equivalency", js: "canadianEquivalency", type: trans.reference("ModelBase") },
            { json: "year", js: "year", type: trans.reference("ModelBase") },
            { json: "awarded-by", js: "awardedBy", type: trans.reference("ModelBase") },
            { json: "status", js: "status", type: trans.reference("ModelBase") },
        ], false),
        "CertificationList": trans.objectOf([
            { json: "id", js: "id", type: trans.reference("GUID") },
            { json: "label", js: "label", type: "" },
            { json: "description", js: "description", type: "" },
            { json: "list", js: "list", type: trans.arrayOf(trans.reference("Certification")) }
        ], false),
        "Certification": trans.objectOf([
            { json: "id", js: "id", type: trans.reference("GUID") },
            { json: "label", js: "label", type: "" },
            { json: "description", js: "description", type: "" }
        ], false),
        "ModelBase": trans.objectOf([
            { json: "id", js: "id", type: trans.reference("GUID") },
            { json: "label", js: "label", type: "" },
            { json: "description", js: "description", type: "" }
        ], false),
        "GUID": trans.objectOf([
            { json: "id", js: "id", type: "" }
        ], false)
    }
}