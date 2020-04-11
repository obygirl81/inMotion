import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Posts } from '../models/posts.model';

@Injectable()
export class PostsService {

  private serviceUrl = 'https://wordpress.org/news/wp-json/wp/v2/posts?order=desc&page=';
  private postDetailUrl = 'https://wordpress.org/news/wp-json/wp/v2/posts/';
  

  constructor(private http: HttpClient) { }
  getPosts(page): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.serviceUrl}${page}`).pipe(res =>res);
  }

  getPostDetails(id): Observable<Posts> {
    return this.http.get<Posts>(`${this.postDetailUrl}${id}`).pipe(res =>res);
  }

  
}
