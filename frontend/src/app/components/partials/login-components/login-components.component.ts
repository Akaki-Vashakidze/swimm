import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../../shared.service';
import { usersLogIn } from '../../../users-log-in.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-components',
  templateUrl: './login-components.component.html',
  styleUrls: ['./login-components.component.scss']
})
export class LoginComponentsComponent implements OnInit, OnDestroy {

 

  constructor(private router : Router,private sharedSercvice : SharedService,private snackBar:MatSnackBar) { }
  subscriptions:Subscription[] = [];
  ngOnInit(): void {
    
  }
  userLogIn : boolean = false;

  checkUser = (pass:any,user:any) => {
  this.sharedSercvice.users.map((item => {
    if(item.user == user.value && item.pass == pass.value) {
      this.sharedSercvice.userIn();
    } 
  }))
  
  if(!this.sharedSercvice.loggedInUser.value) {
    this.snackBar.open('აიდი ან პაროლი არასწორია', 'close' ,{
      duration: 4000,
    });
  }
  if(this.sharedSercvice.loggedInUser.value) {
    this.snackBar.open('თქვენ შესული ხართ სისტემაში', 'close' ,{
      duration: 4000,
    });
    this.router.navigateByUrl('/')
  }
  }

  ngOnDestroy(): void {
  }

}
