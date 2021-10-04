import { Component, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FantasyChampIndia';
  ChangeBackground : boolean;
  
  FCI : string = "assets/images/fci.png";
  imageSrc : string = "assets/images/background.png";
  EmailImg : string = "assets/images/NewArticle.png";
  screenHeight;screenWidth;
  ToolbarDisplay : boolean;
  SideNaveDisplay : boolean;
  animationState = "right";
  mobileVersion : boolean;
  TabVersion : boolean;
  constructor(private router: Router) {
    //set screenWidth on page load
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if(this.screenWidth > 950){
      this.ToolbarDisplay = true;
      this.SideNaveDisplay = false;
    }else{
      this.ToolbarDisplay = false;
      this.SideNaveDisplay = true;
    }
    if(this.screenWidth > 600){
      this.TabVersion = true;
      this.mobileVersion = false;
    }else{
      this.TabVersion = false;
      this.mobileVersion = true;
    }
    window.onresize = () => {
      //set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      console.log(this.screenWidth);
      if(this.screenWidth > 950){
        this.ToolbarDisplay = true;
        this.SideNaveDisplay = false;
      }else{
        this.ToolbarDisplay = false;
        this.SideNaveDisplay = true;
      }
      if(this.screenWidth > 600){
        this.TabVersion = true;
        this.mobileVersion = false;
      }else{
        this.TabVersion = false;
        this.mobileVersion = true;
      }
    };
  }
  @ViewChild('sidenav') private sidenav: MatSidenav;
  @HostListener('window:scroll', ['$event']) 
  doSomething(event) {
    // console.debug("Scroll Event", document.body.scrollTop);
    // see András Szepesházi's comment below
    // console.log("Scroll Event", window.pageYOffset );
    if(window.pageYOffset > 50){
      this.ChangeBackground = true;
      this.FCI = "assets/images/fci.png";
    }else{
      this.ChangeBackground = false;
      this.FCI = "assets/images/fci_white.png";
    }
  }
  menuclick(){
    // this.sidenav.close();
    if(this.sidenav.opened == true){
      this.sidenav.close();
    }else{
      this.sidenav.open();
    }
  }
}
