import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { swimmersInfo } from './swimmers-info.model';
import { usersLogIn } from './users-log-in.model';
import { EVENTS } from './data';
import { users } from './data';
import { HttpClient } from '@angular/common/http';
import { resultsData } from './shared/models/resultsData';
import { RESULTS_URL } from './shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http:HttpClient) {}
  EVENTS = EVENTS;
  loggedInUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userIsIn:boolean = false;
  users: any[] = users;

  userIn = () => {
    this.loggedInUser.next(true);
    console.log('user is logged');
    this.userIsIn = true;
  };

  userOut = () => {
    this.loggedInUser.next(false);
    console.log('user is out');
    this.userIsIn = false;
  };

  getAllResults():Observable<resultsData[]> {
    return this.http.get<resultsData[]>(RESULTS_URL);
  }

  

}
