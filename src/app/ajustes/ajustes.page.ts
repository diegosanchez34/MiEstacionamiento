import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeSwitcherService } from 'src/app/theme-switcher.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor(private router: Router,private themeSwitcher: ThemeSwitcherService) { }

  ngOnInit() {


  }

  async irCambiar() {
    this.router.navigate(['/cambiar']);
  }

  toggleDarkMode() {
    this.themeSwitcher.toggleDarkMode();
  }

}
