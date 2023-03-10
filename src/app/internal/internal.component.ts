import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import { SocketConnection } from '../services/sockets/socket-connection.service';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.css']
})
export class InternalComponent {

  user:any={};

  constructor(
    private api:ApiService,
    // private socket:SocketConnection,
    private toastrService:ToastrService
  ){
    this.user = this.api.user;
    this.api.user$.subscribe(res=>{
      this.user = res;
    })
  }

  logout(){
    this.api.logout();
  }

}
