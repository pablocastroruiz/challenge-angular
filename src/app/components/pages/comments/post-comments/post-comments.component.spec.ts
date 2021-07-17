import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { Comment } from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment.service';

import { PostCommentsComponent } from './post-comments.component';

describe('PostCommentsComponent', () => {
  let component: PostCommentsComponent;
  let fixture: ComponentFixture<PostCommentsComponent>;
  const ActivatedRouteSpy = {
    snapshot: {
      params: convertToParamMap({id: 1})
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PostCommentsComponent ],
      providers: [{provide: ActivatedRoute, useValue: ActivatedRouteSpy}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a comment and set it\'s id', () => {
    const comment: Comment = {id: null, postId: 1, name: "Test name", email: "test@mail.com", body: "Test body"};
    component.createComment(comment);

    expect(component.commentsList.length).toBe(1);
    expect(component.commentsList[0].id).not.toBeNull();
  });

  it('should delete a comment', () => {
    const comments: Comment[] = [
      {id: 1, postId: 1, name: "Test name", email: "test@mail.com", body: "Test body"},
      {id: 2, postId: 1, name: "Test name 2", email: "test2@mail.com", body: "Test body 2"}
    ];
    component.commentsList = comments;

    component.deleteComment(comments[0]);
    expect(component.commentsList.length).toBe(1);
  });
});
