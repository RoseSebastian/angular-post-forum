import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private httpClient: HttpClient) { }

  getposts() : Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      map(data =>{
        return data
      })
    )
  }
}