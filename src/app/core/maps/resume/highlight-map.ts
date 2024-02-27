import { ModelBase } from "../../models/model-base";
import { ModelBaseMap } from "../model-base-map";
import { ModelMap } from "../model-map";
import { ModelMapConverter } from "../model-map-converter";
import { Highlight } from './../../models/resume/highlight';

export class HighlightMap implements ModelMap {
    objToModel(obj: any): Highlight {
        let highlight = {
            link: (obj.link) ? obj.link : ""
        }
        return highlight as Highlight;
    }

    modelToObj(highlight: Highlight): any {
        return { link: highlight.link };
    }
}