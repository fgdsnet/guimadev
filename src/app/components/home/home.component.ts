import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  isLoading = true;

  constructor(private loadingService: LoadingService, private router: Router) { }

  ngOnInit(): void {
    this.loadingService.showLoader();
    this.loadingService.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    //this.router.navigate(['resume-component']);
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadingService.hideLoader();
    }, 200);
    // this.loadingService.hideLoader();
  }
}
