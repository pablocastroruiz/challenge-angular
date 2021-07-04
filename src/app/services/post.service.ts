import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';
import { Observable } from 'rxjs';

const httOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PostService {

  postsList:Post[]= [];

  postsUrl:string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]>{
    //Limit data records, and joining the user owner
    return this.http.get<Post[]>(`${this.postsUrl}?_limit=30&_expand=user`);
  }

  getCachedPost(idPost:number):Post{
    return this.postsList ? this.postsList.filter(item => item.id = idPost)[0] : null;
  }

  getPost(idpost:number):Observable<Post>{
    return this.http.get<Post>(`${this.postsUrl}/${idpost}?_expand=user`);
  }

  deletePost(idPost:number):Observable<any>{
    return this.http.delete(`${this.postsUrl}/${idPost}`, httOptions);
  }

}
