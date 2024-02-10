import { Component } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { Resume } from 'src/app/core/models/resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  public resume: Resume = {} as Resume;
  public name: string = "";

  isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private resumeService: ResumeService) { 
    this.resumeService.loadResume().then(res => {
      console.log('************ Resume', res);
      this.resume = res;
    });
  }
}
