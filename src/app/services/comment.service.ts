import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
export class CommentService {

  commentsUrl:string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getComments(postId:number):Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.commentsUrl}?postId=${postId}`);
  }

  createComment(comment:Comment):Observable<any>{
    return this.http.post<Comment>(this.commentsUrl, comment, httOptions)
  }

  deleteComment(idComment:number):Observable<any>{
    return this.http.delete(`${this.commentsUrl}/${idComment}`, httOptions);
  }

}
