import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {

  environment = environment;
  eventSource:any;
  sampleloginDetails:any={
    _id: "63e9398c4f60e3001e93cc67",
    name: "John Doe",
    email: "johndoe@yopmail.com",
    phone: "9876549878",
    views: ["DASHBOARD", "STATUS", "ANNOUNCEMENTS", "TICKETS", "REPORTING", "PATIENTS", "SETTINGS"],

  };

  constructor(
    private api:ApiService,
    private router:Router
  ) { }

  init(): Promise<any> {
    // return Promise.resolve('IMMIDIATE RESOLVE - appInitService');
    return new Promise<any>((resolve, reject) => {
      if(localStorage.getItem('access_token')){
        this.api.getData('dashboard/loginDetails',{}).subscribe(loginDetails => {
            console.log('loginDetails',loginDetails)
            this.api.updateLoginData(loginDetails);
            resolve('success');
        },error=>{
            console.log('ERROR',error);
            resolve('error');
        });
      }else{
        this.router.navigate(['/']);
        resolve('error');
      }
    });
  }

}
