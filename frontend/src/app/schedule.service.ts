import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }


  schedule: any = {
    day: 'monday',
    schedule: [
      {
        time: '7:00',
        swimmer: 'Liam',
      },
      {
        time: '8:00',
        swimmer: 'free',
      },
      {
        time: '9:00',
        swimmer: 'free',
      },
      {
        time: '10:00',
        swimmer: 'free',
      },
      {
        time: '11:00',
        swimmer: 'free',
      },
      {
        time: '12:00',
        swimmer: 'free',
      },
      {
        time: '13:00',
        swimmer: 'free',
      },
      {
        time: '14:00',
        swimmer: 'free',
      },
      {
        time: '15:00',
        swimmer: 'free',
      },
      {
        time: '16:00',
        swimmer: 'Liam',
      },
      {
        time: '17:00',
        swimmer: 'Spenser',
      },
      {
        time: '18:00',
        swimmer: 'August',
      },

      {
        time: '19:00',
        swimmer: 'Liam',
      },
      {
        time: '20:00',
        swimmer: 'Liam',
      },
    ],
  };
}
