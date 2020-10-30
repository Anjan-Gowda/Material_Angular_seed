import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  headers_object = new HttpHeaders();

  errorHandler: any;
  helperService: any;
  httpOptions: any;
  constructor(
    private http: HttpClient) {

    this.headers_object.append('Content-Type', 'application/json');
    this.headers_object.append("Authorization", "Anjan");

    this.httpOptions = {
      headers: this.headers_object
    };
  }

  get(url,token): Observable<any> {
    if(token!=''){
       this.httpOptions = {
        headers: new HttpHeaders({
          'token': token
        })
      };
    }
    return this.http.get(this.baseUrl + url, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );

  }

  post(url, param,token): Observable<any> {
    if(token!=''){
      this.httpOptions = {
       headers: new HttpHeaders({
         'token': token,
         'Content-Type':'application/json'
       })
     }; 
   }
    return this.http.post<any>(this.baseUrl + url, param, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  put(url, param) {
    return this.http.post<any>(this.baseUrl + url, param, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

  }
  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}