import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IContainer } from './shared/models/api-container.model';
import {
  StartAsyncLoad,
  FinishAsyncLoad,
} from './shared/actions/async.actions';

@Injectable()
export class Appservice {
  constructor(private http: HttpClient) {}

  createNewPost(post: any): Observable<any> {
    return this.http.post<IContainer>(`/post/create`, post).pipe(
      map((response) => (response.isExecuted && response.data ? true : false)),
      catchError((error) => of(false))
    );
  }

  addComment(comment: any, postId: string): Observable<any> {
    return this.http
      .put<IContainer>(`/post/add-comment/${postId}`, comment)
      .pipe(
        map((response) =>
          response.isExecuted && response.data ? true : false
        ),
        catchError((error) => of(false))
      );
  }
  upVote(voterInfo: any, postId: string): Observable<any> {
    return this.http
      .put<IContainer>(`/post/add-upVote/${postId}`, voterInfo)
      .pipe(
        map((response) =>
          response.isExecuted && response.data ? true : false
        ),
        catchError((error) => of(false))
      );
  }
  downVote(voterInfo: any, postId: string): Observable<any> {
    return this.http
      .put<IContainer>(`/post/add-downVote/${postId}`, voterInfo)
      .pipe(
        map((response) =>
          response.isExecuted && response.data ? true : false
        ),
        catchError((error) => of(false))
      );
  }
  getAllPost(): Observable<any> {
    return this.http.get<IContainer>(`/post/view-all-post`).pipe(
      map((response) =>
        response.isExecuted && response.data ? response.data : []
      ),
      catchError((error) => of([]))
    );
  }
}
