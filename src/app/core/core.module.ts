import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLogoComponent } from './components/app-logo/app-logo.component';

@NgModule({
  declarations: [AppLogoComponent],
  imports: [CommonModule],
  exports: [AppLogoComponent],
})
export class CoreModule {}
