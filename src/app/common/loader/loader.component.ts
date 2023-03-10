import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  loading:boolean = false;

  constructor(
    private api:ApiService
  ) { 
    this.api.loaderState.subscribe(data=>{
      if(data){
        this.loading = true
      }else{
        this.loading = false;
      }
      
    });
  }

  ngOnInit(): void {
    console.log('loading');
  }

}