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

  postsUrl:string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`${this.postsUrl}?_limit=10`);
  }

  getPost(idpost:number):Observable<Post>{
    return this.http.get<Post>(`${this.postsUrl}/${idpost}`);
  }

  deletePost(idPost:number):Observable<any>{
    return this.http.delete(`${this.postsUrl}/${idPost}`, httOptions);
  }

}
