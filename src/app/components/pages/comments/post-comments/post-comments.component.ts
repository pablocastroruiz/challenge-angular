import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';
import { Post } from 'src/app/models/Post';
import { Comment } from 'src/app/models/Comment';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

  post:Post;
  postId:number;
  commentsList:Comment[] = [];
  constructor(private route: ActivatedRoute, private postService: PostService, private commentService: CommentService) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.params['id'];
    //Get cached data
    this.post = this.postService.getCachedPost(this.postId);
    if(!this.post)
    this.postService.getPost(this.postId).subscribe(post => {
      this.post = post;
    });

    this.commentService.getComments(this.postId).subscribe(comments => {
      this.commentsList = comments;
    });
  }
  
  createComment(comment:Comment): void{
    this.commentService.createComment(comment).subscribe();
    //Adding mock id
    comment.id = uuidv4();
    this.commentsList.unshift(comment);
  }

  deleteComment(comment:Comment): void{
    this.commentService.deleteComment(comment.id).subscribe();
    this.commentsList = this.commentsList.filter(item => item.id != comment.id);
  }
}
