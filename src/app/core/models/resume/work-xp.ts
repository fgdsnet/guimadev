import { JobLocation } from "./job-location";
import { ModelBase } from '../model-base';
import { JobPeriod } from './job-period';

export interface WorkXP extends ModelBase{
    position:     ModelBase;
    company:      ModelBase;
    type:         ModelBase;
    jobPeriod:    JobPeriod;
    jobLocation:  JobLocation;
    achievements: ModelBase[];
}