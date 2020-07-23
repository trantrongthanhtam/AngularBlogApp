import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogContentsComponent } from './blog-contents/blog-contents.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { AboutContentsComponent } from './about-contents/about-contents.component';
import { HomeContentsComponent } from './home-contents/home-contents.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

@NgModule({
   declarations: [
      AppComponent,
      BlogContentsComponent,
      NavbarComponent,
      FooterComponent,
      AboutContentsComponent,
      HomeContentsComponent,
      BlogPostComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
