
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ApiService } from '../api.service';


@Injectable({
  providedIn: 'root'
})
export class SocketConnection extends Socket {

  constructor(
    private api: ApiService,
  ) {
    super({ url: `${environment.SOCKET_END_POINT}?id=${api.user._id}`, options: {
      transports: ["websocket"]
    } });
  }

}
