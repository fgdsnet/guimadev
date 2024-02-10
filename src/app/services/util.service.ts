import * as resumeJson from '../../assets/resume.json';
import { Transformation as trans } from '../core/Transformation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

readJsonFile<T>(map: any, path: string, modelName: string): T{
  try {
      const data = resumeJson;
      return trans.parse<T>(map, data, trans.reference(modelName));
  } catch (error: any) {
      console.error('JSON parse error:', error.message);
      return <any>{} ;
  }
}
}
