import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders, HttpEventType } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiEndpoint:String = "";

  user:any;
  private loginSource = new BehaviorSubject<any>({});
  user$ = this.loginSource.asObservable();

  // Show and hide Loader
  showLoader:boolean=true;
  private loaderSubject = new Subject<Boolean>();
  loaderState = this.loaderSubject.asObservable();
  loader(value:any){this.loaderSubject.next( value ); }

  constructor(
    private http:HttpClient,
    private router:Router
  ) { 
    this.apiEndpoint = environment.API_END_POINT;
  }

  getData(url:string,param:any){
    return this.http.get<any>(this.apiEndpoint+url,{params:param});
  }

  postData(url:string,value:any){
    // console.log(value);
    Object.keys(value).forEach(key => {
      if(!value[key] || value[key] === undefined )
      delete value[key];
    });
    // console.log(value);
    return this.http.post<any>(this.apiEndpoint+url,value);
  }
  
  putData(url:string,value:any){
    return this.http.put<any>(this.apiEndpoint+url,value);
  }

  patchData(url:string,value:any){
    return this.http.patch<any>(this.apiEndpoint+url,value);
  }

  deleteData(url:string,param:any){
    return this.http.delete<any>(this.apiEndpoint+url,{params:param});
  }

  errorHandler(err:any){
    console.log(err);
  }


  updateLoginData(user:any){
    console.log('NEXT',user);
    this.user = user;
    this.loginSource.next(user);
  }

  logout(){
    localStorage.clear();
  }

}
