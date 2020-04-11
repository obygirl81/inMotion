import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoststableComponent } from './components/poststable/poststable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsService } from './services/posts.service';
import { HomeComponent } from './home/home.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PoststableComponent,
    HomeComponent,
    PostsListComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
