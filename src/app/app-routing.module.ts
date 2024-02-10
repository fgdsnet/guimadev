import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { ResumeComponent } from './components/resume/resume.component';
import { HomeComponent } from './components/home/home.component';
import { InitializeGuard } from './guards/initialize.guard';

const routes: Routes = [
  //{ path: '', component: HomeComponent, canActivate: [InitializeGuard] },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'course-component', component: CourseComponent },
  { path: 'resume-component', component: ResumeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
