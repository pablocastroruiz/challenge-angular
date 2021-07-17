import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  @Input() postId: number;
  @Output() createComment: EventEmitter<Comment> = new EventEmitter();

  newComment:Comment = new Comment();
  commentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      name: [this.newComment.name, [Validators.required, Validators.maxLength(50)]],
      email: [this.newComment.email, [Validators.required, Validators.maxLength(50), Validators.email]],
      body: [this.newComment.body, [Validators.required, Validators.maxLength(200)]]
    });
  }

  submitComment(): void{
    if(this.commentForm.valid){
      this.createComment.emit(this.commentForm.value);
      this.commentForm.reset();
    }else{
      this.commentForm.markAllAsTouched();
    }
  }
}
