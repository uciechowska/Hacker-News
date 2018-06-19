import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
//import { map } from 'rxjs/operators';

@Injectable()
export class HackerNewsAPIService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  fetchStories(storyType: string, page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`)
      .map(response => response.json());
  }

  fetchComments(storyType: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${storyType}`)
      .map(response => response.json());
  }

  fetchItemContent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}`)
      .map(response => response.json());
  }

  fetchUser(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${id}`)
      .map(response => response.json());
  }
}