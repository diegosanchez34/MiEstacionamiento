import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

  private darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
  }

  isDarkMode() {
    return this.darkMode;
  }

  constructor() { }
}
