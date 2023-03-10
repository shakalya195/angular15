import { Injectable } from '@angular/core';
import { HttpRequest, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService  implements HttpInterceptor {

  constructor(private api:ApiService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Clone the request to add the new header.
    let token = localStorage.getItem("access_token");
    let region = localStorage.getItem("region");
    if(token
      && /zipcodeapi.com/i.test(req.url) == false
      && /247appoint.com/i.test(req.url) == false
      ){
      req = req.clone({ headers: req.headers.set("authorization", token)});
    }
    if(this.api.user && this.api.user.type == 'SUPERADMIN' && region){
      req = req.clone({ headers: req.headers.set("region", region)});
    }
    if(this.api.showLoader){
      this.api.loader(true);
    }else{
      this.api.showLoader = true;
    }

    return next.handle(req).pipe(tap((event: HttpEvent<any>) => { 
      if (event instanceof HttpResponse) {
        this.api.loader(false);
      }
    },
    (err: any) => {
      this.api.loader(false);
      if (err instanceof HttpErrorResponse) {
        if(err.error.statusCode==401){
          localStorage.removeItem('access_token');
          console.log('UNABLE TO CONNECT',err);
        }
      }
    }));
  }

}