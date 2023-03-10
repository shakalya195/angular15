import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './external/page-not-found/page-not-found.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoaderComponent } from './common/loader/loader.component';
import { ApiService } from './services/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppLoadService } from './services/app-load.service';
import { InterceptorService } from './services/interceptor.service';
import { SocketIoModule } from 'ngx-socket-io';
import { ToastrModule } from 'ngx-toastr';

export function initializeApp(appInitService: AppLoadService) {
  return (): Promise<any> => {
    return appInitService.init().then(
      (val) => {
        console.log(val);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}

const routes: Routes = [
  {
    path: 'error', component: PageNotFoundComponent
  },
  {
    path: '', loadChildren: () => import('./external/external.module').then(m => m.ExternalModule), data: { preload: false, delay: false }
  },
  {
    path: '', loadChildren: () => import('./internal/internal.module').then(m => m.InternalModule), data: { preload: false, delay: false }
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
  ],
  providers: [
    ApiService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppLoadService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
