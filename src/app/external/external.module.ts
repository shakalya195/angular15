import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ExternalComponent } from './external.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from '../common/header/header.component';

var routes: Routes = [
  { path: '', component: ExternalComponent, children: [
      { path: '', component: HomeComponent},
      { path: 'login', component: LoginComponent },
    ]
  }
];

@NgModule({
  declarations: [
    ExternalComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ExternalModule { }
