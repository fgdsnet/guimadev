import { ModelBase } from "../../models/model-base";
import { ModelBaseMap } from "../model-base-map";
import { ModelMap } from "../model-map";
import { ModelMapConverter as convert } from "../model-map-converter";
import { CertificationList } from './../../models/resume/certification-list';

export class CertificationListMap implements ModelMap {
    public objToModel(obj: any): CertificationList {
        let certificationList = {
            list: (obj.list) ? convert.objToModelList<ModelBase>(
                obj.list, new ModelBaseMap()) : {} as ModelBase[]
        }
        return certificationList as CertificationList;
    }

    public modelToObj(certificationList: CertificationList): any {
        return {
            list: convert.modelToObjList<ModelBase>(
                certificationList.list, new ModelBaseMap())
        };
    }
}