import * as resumeJson from '../../assets/resume.json';
import { Injectable } from '@angular/core';
import { ResumeConverter } from '../core/resume-converter';
import { Resume } from '../core/models/resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }
  public getResume(): Promise<string> {
    return Promise.resolve(JSON.stringify(resumeJson));
  }


  async loadResume(): Promise<Resume> {
    let resumeString = await this.getResume();
    return Promise.resolve(ResumeConverter.toResume(resumeString));
  }
}
