import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Utente } from '../model/utente';
import { ARTICOLI } from '../mock/articoli';
import { Articoli } from '../model/articoli';
@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  getUtente() {
    return  this.http.get<Utente[]>(this.utenteUrl);
  }
  getMock(): Articoli[] {
    return ARTICOLI;
  }
  utenteUrl='http://localhost:3000/utente'
  constructor(private http: HttpClient) { }



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  creaUtente(InsPers): Observable<Utente>{ 
    return this.http.post<Utente>(this.utenteUrl,JSON.stringify(InsPers),this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
    }
  


  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }



}
