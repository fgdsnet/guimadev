import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  BREAKPOINT: number = 992;
  public mobileMenuExpanded: boolean = false;
  public toggleMenu = (): void => {
    this.mobileMenuExpanded = !this.mobileMenuExpanded;
  }

  public navigateMenu = (): void => {
    this.mobileMenuExpanded = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.adjustMenuOnResize();
  }

  private adjustMenuOnResize(): void {
    // Logic to remove the class on maximized screen
    if (window.innerWidth > this.BREAKPOINT) {
      this.mobileMenuExpanded = false;
    }
  }
}
