import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.scss']
})
export class AlldataComponent implements OnInit {
  results:any;
  constructor(private route : Router,private sharedService:SharedService) { 

  }

  ngOnInit(): void {
    this.sharedService.getAllResults().subscribe((item)=> {
      this.results = item
      console.log(this.results)
    })
  }


  findComp = (item:any) => {
  console.log(item)
   this.route.navigateByUrl('/comps/' + item)
  }

}
