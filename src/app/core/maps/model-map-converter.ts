import { ModelMap } from './model-map';
import { ModelBaseMap } from './model-base-map';
import { ModelBase } from '../models/model-base';

export class ModelMapConverter {
    public static objToModelList<T>(obj: any[], modelMap: ModelMap): T[]{
        return <T[]>obj.map(o => ModelMapConverter.objToModel<T>(o,modelMap));
    }

    public static modelToObjList<T>(model: T[], map: ModelMap): any[]{
        return model.map(m => map.modelToObj(m as ModelBase) );
    }

    public static objToModel<T>(obj: any, modelMap: ModelMap): T{
        let modelBaseMap = new ModelBaseMap();
        let model = modelMap.objToModel(obj);
        if(!model.id || (!model.description && !model.label && !model.name))
        return <T>{
            ...modelBaseMap.objToModel(obj),
            ...model
        };
        else return <T>model;
    }

    public static modelToObj<T>(model: T, modelMap: ModelMap): any{
        let modelBaseMap = new ModelBaseMap();
        let obj = modelMap.modelToObj(model as ModelBase);

        if(!obj.id || (!obj.description &&!obj.label &&!obj.name))
            return {
                ...modelBaseMap.modelToObj(model as ModelBase),
                ...obj
            };
        else return obj;
    }
}