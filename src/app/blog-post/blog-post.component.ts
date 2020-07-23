import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import myblog from "../../assets/blog-page/myblog.json";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})

export class BlogPostComponent implements OnInit {
  blog;
  constructor(private route: ActivatedRoute) { }

  createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild; 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('blogid'));
      let blogs = Object.values(myblog);
      for (let blog of blogs) {
        if (blog.id == params.get('blogid')){
          this.blog = blog;
        }
      }
    });
  }

}
