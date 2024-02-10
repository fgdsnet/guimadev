import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitialPageService {

  constructor() { }

  private hasInitialized = false;

  get shouldInitialize(): boolean {
    return !this.hasInitialized;
  }

  markAsInitialized(): void {
    this.hasInitialized = true;
  }
}



