import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Item} from "./item.interface";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  URL = `https://jsonplaceholder.typicode.com/posts`;

  constructor(private httpClient: HttpClient) { }

  getFeed(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.URL).pipe(
      map((items: Item[]) => items.map(item => ({...item,
        imageUrl: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/6684441/large/3aeeee03514df2858af26aea68c54e44.jpg',
        price: 500}
        )))
    );
  }

  addPost(item: Item): Observable<Item>{
    const body = {
      userId: item.userId,
      body: item.body,
      title: item.title
    };

    return this.httpClient.post<Item>(this.URL, body);
  }

  updatePost(id: number, item: Item) {
    const body = {
      userId: item.userId,
      body: item.body,
      title: item.title
    }
    return this.httpClient.put<Item>(`${this.URL}/${id}`, body)

  }

  getAllUserPosts(userId: number){

    let params: HttpParams = new HttpParams();
    params = params.append('userId', userId);

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('token', 'BLABLABLA');

    return this.httpClient.get<Item[]>(this.URL, {params, headers});
  }

  getPostById(id: number): Observable<Item> {
    return this.httpClient.get<Item>(`${this.URL}/${id}`);

  }


}
