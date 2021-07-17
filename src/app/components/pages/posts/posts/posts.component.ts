import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsList:Post[];

  constructor(private postService:PostService) {  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.postsList = posts;
      this.postService.postsList = this.postsList;
    });
  }

  deletePost(post:Post): void{
    this.postService.deletePost(post.id).subscribe();
    this.postsList = this.postsList.filter(item => item.id != post.id);
  }
}
