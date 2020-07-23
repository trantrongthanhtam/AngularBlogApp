import { Component, OnInit } from '@angular/core';
import myjson from "../../assets/blog-page/myblog.json";

@Component({
  selector: 'app-blog-contents',
  templateUrl: './blog-contents.component.html',
  styleUrls: ['./blog-contents.component.css']
})
export class BlogContentsComponent implements OnInit {
  myblog = Object.values(myjson);
  constructor() {
    console.log("Reading json files");
   }

  ngOnInit() {
  }

}
