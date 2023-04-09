import { Component } from '@angular/core';
import { APP_NAME } from 'src/config/app';

@Component({
  selector: 'app-logo',
  templateUrl: './app-logo.component.html',
  styleUrls: ['./app-logo.component.sass'],
})
export class AppLogoComponent {
  logo = APP_NAME;
}
