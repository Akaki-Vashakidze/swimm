import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SharedService } from "src/app/shared.service";


@Component({
  selector: "app-comps",
  templateUrl: "./comps.component.html",
  styleUrls: ["./comps.component.scss"],
})
export class CompsComponent implements OnInit {
  events:any;
  compResults: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.sharedService.getAllResults().subscribe((competitions) => {
            competitions.map((item: any) => {
            if ((item.id === params.searchTerm)) {
              this.compResults = item;
              this.events = this.compResults.meetInfo;

              console.log(this.compResults,this.events)
            }
          });
        });
     
      }
    });
  }

  ngOnInit(): void {}
}
