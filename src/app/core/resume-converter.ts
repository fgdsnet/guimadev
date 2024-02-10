import { Transformation as trans } from './Transformation';
import { Resume } from './models/resume';
import { ResumeTypeMap as map } from './models/resume-type-map';

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
        return trans.parse<Resume>(map.ResumeTypeMap, JSON.parse(json), trans.reference("Resume"));
    }

    /**
     * Converts an array of resume objects to a JSON string.
     * @param value The array of resume objects to stringify.
     * @returns A JSON string representing the array of resume objects.
     */
    public static resumeToJson(value: Resume[]): string {
        return JSON.stringify(trans.unparse(map.ResumeTypeMap, value, trans.arrayOf("Resume")), null, 2);
    }
}