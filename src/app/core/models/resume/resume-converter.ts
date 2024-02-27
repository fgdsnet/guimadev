import { Transformation as trans } from '../../Transformation';
import { ModelMapConverter } from '../../maps/model-map-converter';
import { ResumeMap } from '../../maps/resume/resume-map';
import { Resume } from './resume';
import { ResumeTypeMap as map } from './resume-type-map';

/**
 * Converts JSON strings to/from resume objects and asserts the results of JSON.parse at runtime.
 */
export class ResumeConverter {
    /**
     * Converts a JSON string to an array of resume objects.
     * @param json The JSON string to parse.
     * @returns An array of resume objects.
     */
    public static toResume(json: string): Resume {
        // return trans.parse<Resume>(map.ResumeTypeMap, <Resume>JSON.parse(json), trans.reference("Resume"));
        return ModelMapConverter.objToModel<Resume>(JSON.parse(json), new ResumeMap());
    }

    /**
     * Converts an array of resume objects to a JSON string.
     * @param resume The resume object to stringify.
     * @returns A JSON string representing the array of resume objects.
     */
    public static resumeToJson(resume: Resume): string {
        return ModelMapConverter.modelToObj<Resume>(resume, new ResumeMap());
        // return JSON.stringify(trans.unparse(map.ResumeTypeMap, value, trans.arrayOf("Resume")), null, 2);
    }
}