import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponentsComponent } from './components/partials/login-components/login-components.component';
import { SharedService } from './shared.service';
import { resultsArray } from './results';
import { times } from './results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(public dialog:MatDialog,private sharedService:SharedService){}
  signedIn:boolean = false;
  opened = false;
  resultsArray = times;
  EVENTS = this.sharedService.EVENTS;
  DATA : any;
  results : any;

  dialogRef:any;

  addCard = () => {
    if(!this.sharedService.userIsIn) {
      this.openDialog()
      return;
    }
    this.opened = !this.opened
  }

  ngOnInit(): void {
      this.sharedService.loggedInUser.subscribe(item => {
        this.signedIn = item;
        if(item) {
          this.dialogRef.close();
        }
      })
  }



  openDialog(){
  this.dialogRef = this.dialog.open(LoginComponentsComponent);
  }

  logOut = () => {
    this.sharedService.userOut();
  }

}
