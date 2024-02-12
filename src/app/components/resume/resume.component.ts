import { Component } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { Resume } from 'src/app/core/models/resume';
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
  editable: boolean = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private resumeService: ResumeService) { 
    this.resumeService.loadResume().then(res => {
     // console.log('************ Resume', res);
      this.resume = res;
    });
  }

  editableClick(event: MouseEvent, item: any) {
    const targetElement = event.target as HTMLElement;
    const ariaControls = targetElement.getAttribute('aria-controls');
    if (ariaControls) {
      const inputElement = document.getElementById(ariaControls) as HTMLInputElement;
      if (inputElement) {
        item.editing = true;
        setTimeout(()=>{ inputElement.select(); }, 50);
      }
    }
  }

  inputBlur(event: FocusEvent, item: any) {
    item.description = (event.target as HTMLInputElement).value;
    item.editing = false;
  }
}
