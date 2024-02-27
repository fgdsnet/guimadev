import { Component } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { Resume } from 'src/app/core/models/resume/resume';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  public resume: Resume = {} as Resume;
  public name: string = "";
  isCollapsed = true;
  showEndDate: boolean = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private resumeService: ResumeService) { 
    this.resumeService.loadResume().then(res => {
      console.log('************ Resume', res);
      console.log('************ Resume.id', res.id.toString());
      this.resume = res;
    });
  }
}
