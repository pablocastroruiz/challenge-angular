import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { PostsComponent } from './components/pages/posts/posts/posts.component';
import { PostItemComponent } from './components/pages/posts/post-item/post-item.component';
import { PostCommentsComponent } from './components/pages/comments/post-comments/post-comments.component';
import { CommentItemComponent } from './components/pages/comments/comment-item/comment-item.component';
import { NewCommentComponent } from './components/pages/comments/new-comment/new-comment.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PostsComponent,
    PostItemComponent,
    PostCommentsComponent,
    CommentItemComponent,
    NewCommentComponent,
    AboutComponent,
    PageNotFoundComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
