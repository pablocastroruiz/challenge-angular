import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostService } from './post.service';
import { Post } from '../models/Post';

describe('PostService', () => {
  let service: PostService;
  let httpClientMock:HttpTestingController;
  let postsUrl = "https://jsonplaceholder.typicode.com/posts";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });
    service = TestBed.inject(PostService);
    httpClientMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpClientMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get posts', () => {
    const expectedPosts:Post[] = [
      {id: 1, userId: 1, title: "test", body: "body", user: {}},
      {id: 2, userId: 2, title: "test2", body: "body2", user: {}}
    ]
    service.getPosts().subscribe(data => {
      expect(data).toEqual(expectedPosts);
      expect(data.length).toBe(2);
    })

    const req = httpClientMock.expectOne(`${postsUrl}?_limit=30&_expand=user`);
    expect(req.request.method).toEqual("GET");
    req.flush(expectedPosts);
  });

  it('should return null', () => {
    var post:Post = new Post();
    post = service.getCachedPost(0);
    expect(post).toBeNull();
  });

  it('should get one post', () => {
    const postId = 1
    const expectedPost:Post = {id: 1, userId: 1, title: "title", body: "body", user: {}};
    service.getPost(postId).subscribe(data => {
      expect(data).toEqual(expectedPost);
    });

    const req = httpClientMock.expectOne(`${postsUrl}/${postId}?_expand=user`);
    expect(req.request.method).toEqual("GET");
    req.flush(expectedPost);
  });
  
  it('should delete one post', () => {
    const postId = 1;
    service.deletePost(postId).subscribe(data => {
      expect(data).toEqual({});
    })

    const req = httpClientMock.expectOne(`${postsUrl}/${postId}`);
    expect(req.request.method).toEqual("DELETE");
  });
});