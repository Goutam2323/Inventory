import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8015/api/v1/users/login';

  constructor(private http: HttpClient, public router: Router) {}

  // Method to handle user registration
  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
  //  method to handle the response
  handleResponse(response: any) {
    console.log('User registered successfully', response);
    if (response.message === 'success') {
      this.router.navigate(['/product-form']);
      localStorage.setItem('userDetails', JSON.stringify(response.payload));
      localStorage.setItem('accessToken', response.payload.token);
      localStorage.setItem('refreshToken', response.payload.refreshToken);
    }
  }
  //method to handle the error
  handleError(error: any) {
    console.error('Error during registration', error);
  }
}
