import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  @Output() createComment: EventEmitter<Comment> = new EventEmitter();

  newComment:Comment = new Comment();
  commentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      name: [this.newComment.name, [Validators.required]],
      email: [this.newComment.email, [Validators.required]],
      body: [this.newComment.body, [Validators.required]]
    });
  }

  submitComment(): void{
    if(this.commentForm.valid){
      this.createComment.emit(this.newComment);
      this.commentForm.reset();
    }
  }
}
