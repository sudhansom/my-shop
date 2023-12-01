import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface IAuthResponseData {
  kind: string;
  idToken: string;
  expiresIn: string;
  email: string;
  refreshToken: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private http: HttpClient) {}
  signUp(email: string, password: string) {
    return (
      this.http
        .post<IAuthResponseData>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAF96rdOfVDeIYxCIp5feoE5HQeqp4Ck8E',
          {
            email,
            password,
            returnSecureToken: true,
          }
        )
        // .pipe(catchError((sss) => this.handleError(sss)));
        .pipe(catchError(this.handleError))
    );
  }
  login(email: string, password: string) {
    return this.http.post<IAuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAF96rdOfVDeIYxCIp5feoE5HQeqp4Ck8E',
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => new Error(errorMessage));
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = ' this email already exists.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'password does not match';
        break;
    }
    return throwError(() => new Error(errorMessage));
  }
}
