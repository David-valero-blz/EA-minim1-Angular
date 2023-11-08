import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Issue } from './issue';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class IssueService {
  issueAdd(issueAdd: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }

  
  //The events web API expects a special header in HTTP save requests:
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private issuesUrl = 'http://localhost:9090/issues/';  // URL to web api
  


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  /** GET heroes from the server */
  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.issuesUrl)
      .pipe(
        tap(_ => this.log('fetched events')),
        catchError(this.handleError<Issue[]>('getIssues', []))
     );
  }
/*
  getUser(id: number): Observable<Event> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const event = EVENTS.find(h => h.id === id)!;
    this.messageService.add(`EventService: fetched event id=${id}`);
    return of(event);
  }
  */

  /** GET user by id. Will 404 if id not found */
  getIssue(id: string): Observable<Issue> {
    const url = `${this.issuesUrl}/${id}`;
    return this.http.get<Issue>(url).pipe(
      tap(_ => this.log(`fetched issue id=${id}`)),
      catchError(this.handleError<Issue>(`getIssue id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateIssue(id: string, issue: any): Observable<any> {
    console.log(id);
    const url = `${this.issuesUrl}/${id}`;
    
    const resp = this.http.put(url, issue, this.httpOptions).pipe(
      tap(_ => this.log(`updated issue id=${id}`)),
      catchError(this.handleError<any>('updateissue'))
    );
    return resp;

  }

  /** POST: add a new user to the server */
  addIssue(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(this.issuesUrl, issue, this.httpOptions).pipe(
      tap((newIssue: Issue) => this.log(`added issue w/ id=${newIssue._id}`)),
      catchError(this.handleError<Issue>('addIssue'))
    );
  }

  /** DELETE: delete the user from the server */
  deleteIssue(id: string): Observable<Issue> {
    const url = `${this.issuesUrl}/${id}`;

    return this.http.delete<Issue>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted issue id=${id}`)),
      catchError(this.handleError<Issue>('deleteIssue'))
    );
  }

    /* GET users whose name contains search term */
  searchIssue(term: string): Observable<Issue[]> {
    if (!term.trim()) {
      // if not search term, return empty event array.
      return of([]);
   }
    return this.http.get<Issue[]>(`${this.issuesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found issue matching "${term}"`) :
         this.log(`no issues matching "${term}"`)),
     catchError(this.handleError<Issue[]>('searchIssues', []))
   );
  }

  /** Log an UserService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`IssueService: ${message}`);
  }
}

