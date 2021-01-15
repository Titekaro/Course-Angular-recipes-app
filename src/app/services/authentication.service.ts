import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import * as config from '../../../config.json';

export interface AuthenticationResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  signUpApiURL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + config.firebaseApiKey;
  signInApiURL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + config.firebaseApiKey;

  constructor(private http: HttpClient) {
  }

  signIn(email: string, password: string) {
    return this.http.post<AuthenticationResponseData>(this.signInApiURL, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(errorResponse => {
      let errorMessage = 'An unknow error occured';
      if (!errorResponse.error || !errorResponse.error.error) {
        return throwError(errorMessage);
      }
      switch (errorResponse.error.error.message) {
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'The password is invalid or the user does not have a password.';
          break;
        case 'USER_DISABLED':
          'The user account has been disabled by an administrator.';
          break;
      }
      return throwError(errorMessage);
    }));
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthenticationResponseData>(this.signUpApiURL, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(errorResponse => {
      let errorMessage = 'An unknow error occured';
      if (!errorResponse.error || !errorResponse.error.error) {
        return throwError(errorMessage);
      }
      switch (errorResponse.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'The email address is already in use by another account.';
          break;
        case 'OPERATION_NOT_ALLOWED':
          errorMessage = 'Password sign-in is disabled for this project';
          break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          'We have blocked all requests from this device due to unusual activity. Try again later.';
          break;
      }
      return throwError(errorMessage);
    }));
  }
}
