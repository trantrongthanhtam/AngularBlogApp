import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeContentsComponent} from './home-contents/home-contents.component'
import {AboutContentsComponent} from './about-contents/about-contents.component'
import { BlogContentsComponent } from './blog-contents/blog-contents.component';
import { BlogPostComponent } from './blog-post/blog-post.component';


const routes: Routes = [
  { path: 'home', component: HomeContentsComponent },
  { path: 'about', component: AboutContentsComponent },
  { path: 'blog', component: BlogContentsComponent },
  { path: 'blog/:blogid', component: BlogPostComponent },
  { path:'', redirectTo:'/home' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
