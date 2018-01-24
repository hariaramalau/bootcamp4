import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  file: File;
  clothingList = [];

  constructor(private http: Http, private route: Router) { }

  ngOnInit() {

    this.http.get("http://localhost:3000/api/clothing", {})
      .subscribe(
      result => {},
      error => {
        console.log("init error")
      }
    )
    this.loadclothingList();
  }


  loadclothingList() {

    this.http.get("http://localhost:3000/api/clothing")
      .subscribe(
      result => {
        console.log("works");
        this.clothingList = result.json();
      },
      error => {
        console.log("error");
      }
      );
  }
}
