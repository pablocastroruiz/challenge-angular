import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Comment } from '../models/Comment';
import { CommentService } from './comment.service';

describe('CommentService', () => {
  let service: CommentService;
  let httpClientMock:HttpTestingController;
  let commentsUrl = "https://jsonplaceholder.typicode.com/comments";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentService]
    });
    service = TestBed.inject(CommentService);
    httpClientMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpClientMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a post\'s comments', () => {
    const postId = 1;
    const expectedComments:Comment[] = [
      {id: 1, postId: 1, name: "Test name", email: "test@mail.com", body: "Test body"},
      {id: 2, postId: 1, name: "Test name 2", email: "test2@mail.com", body: "Test body 2"}
    ]
    service.getComments(postId).subscribe(data => {
      expect(data).toEqual(expectedComments);
      expect(data.length).toBe(2);
    })

    const req = httpClientMock.expectOne(`${commentsUrl}?postId=${postId}`);
    expect(req.request.method).toEqual("GET");
    req.flush(expectedComments);
  });

  it('should create a comment', () => {
    const comment: Comment = {id: 1, postId: 1, name: "Test name", email: "test@mail.com", body: "Test body"};

    service.createComment(comment).subscribe(data => {
      expect(data).toEqual(comment);
    });

    const req = httpClientMock.expectOne(`${commentsUrl}`);
    expect(req.request.method).toEqual("POST");
    req.flush(comment);
  });

  it('should delete one comment', () => {
    const commentId = 1;

    service.deleteComment(commentId).subscribe(data => {
      expect(data).toEqual({});
    });

    const req = httpClientMock.expectOne(`${commentsUrl}/${commentId}`);
    expect(req.request.method).toEqual("DELETE");
  });
});
