import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  isLoading = true;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.showLoader();
    this.loadingService.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadingService.hideLoader();
    }, 500);
    // this.loadingService.hideLoader();
  }
}
