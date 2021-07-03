import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post;
  @Output() deletePost: EventEmitter<Post> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(): void {
    this.router.navigate(['comments', this.post.id]);
  }

  removePost(): void {
    this.deletePost.emit(this.post);
  }
}
