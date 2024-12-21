import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductFormService {
  private apiUrl = 'http://localhost:8015/api/v1/spares';
  constructor(private http: HttpClient) {}

  // Get the access token from localStorage
  private getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  // Get the refresh token from localStorage (optional, if needed for token refreshing)
  private getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  // Method to add tokens to headers
  private addAuthHeaders(): HttpHeaders {
    const accessToken = this.getAccessToken();
    const refreshToken = this.getRefreshToken();
    let headers = new HttpHeaders();

    if (accessToken) {
      headers = headers.append('Authorization', `Bearer ${accessToken}`);
      console.log(accessToken);
    }

    // If you need to add refresh token to headers, you can do it similarly:
    if (refreshToken) {
      headers = headers.append('x-refresh-token', `Bearer ${refreshToken}`);
      console.log(refreshToken);
    }

    return headers;
  }

  // Example method to send data with the token in headers
  sendData(data: any): Observable<any> {
    const headers = this.addAuthHeaders();
    return this.http.post(this.apiUrl, data, { headers });
  }
}
