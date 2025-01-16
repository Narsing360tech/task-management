import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3001';

  fetchUserProfile(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/userProfiles/${userId}`).pipe(

    );
  }

  fetchUserPermissions(role: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/userPermissions?role=${role}`);
  }
}
