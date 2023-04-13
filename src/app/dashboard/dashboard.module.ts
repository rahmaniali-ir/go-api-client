import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './component/dashboard-view/dashboard-view.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';

@NgModule({
  declarations: [
    DashboardViewComponent,
    SideBarComponent
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
