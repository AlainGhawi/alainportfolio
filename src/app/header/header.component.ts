import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //Sidebar toggle show hide function
  status = false;

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('en');
  }
  
  addToggle() {
    this.status = !this.status;
  }

  changeLanguage(language: string): void {
    this.translateService.use(language);
  }
}