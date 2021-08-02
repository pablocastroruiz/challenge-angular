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

  getPosts(page: number, elems: number):Observable<any>{
    //Limit data records, and join the user owner
    return this.http.get<any>(`${this.postsUrl}?_page=${page}&_limit=${elems}&_expand=user`, {observe: 'response'});
  }

  getCachedPost(idPost:number):Post{
    return this.postsList.length ? this.postsList.filter(item => item.id = idPost)[0] : null;
  }

  getPost(idpost:number):Observable<Post>{
    //Join the user owner
    return this.http.get<Post>(`${this.postsUrl}/${idpost}?_expand=user`);
  }

  deletePost(idPost:number):Observable<any>{
    return this.http.delete(`${this.postsUrl}/${idPost}`, httOptions);
  }

}
