import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user:any;
  
  @ViewChild('headerMain')headerMain:ElementRef;
  @ViewChild('navbarToggler') navbarToggler:ElementRef;
  
  @HostListener("window:scroll", [])
  onWindowScroll() {
    // console.log("Scrolling!");
    var top = 50;
    if(document.documentElement.scrollTop >= top){
      this.headerMain.nativeElement.classList.add("fixed");
    }else{
      this.headerMain.nativeElement.classList.remove("fixed");
    }
  }

  constructor(
    private api:ApiService
  ) { }
  
  ngOnInit(): void {
    this.user = this.api.user;
  }


  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

}
