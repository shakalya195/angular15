import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalComponent } from './internal.component';
import { SocketsService } from '../services/sockets/sockets.service';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


var routes: Routes = [
  { path: 'admin', component: InternalComponent, children: [
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'settings', component: SettingsComponent },
  ]
}];

@NgModule({
  declarations: [
    InternalComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers:[
    SocketsService
  ]
})
export class InternalModule { }
