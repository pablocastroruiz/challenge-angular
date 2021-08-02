import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsList: Post[] = [];
  totalPosts: number = 0;
  elemsPerPage: number = 6;

  constructor(private postService:PostService) {  }

  ngOnInit(): void {
    this.getPosts(1);
  }

  deletePost(post:Post): void{
    this.postService.deletePost(post.id).subscribe();
    this.postsList = this.postsList.filter(item => item.id != post.id);
  }

  getPosts(page: number): void {
    this.postService.getPosts(page, this.elemsPerPage).subscribe(response => {
      this.postsList = response.body;
      this.totalPosts = response.headers.get('X-total-count');
      this.postService.postsList = this.postsList;
    });
  }
}
