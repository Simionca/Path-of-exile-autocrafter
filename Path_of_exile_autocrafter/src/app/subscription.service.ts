// src/app/subscription.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // HttpClient is used to send HTTP requests
import { Observable } from 'rxjs'; // Observable is used for handling asynchronous operations

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  
  private apiUrl = '<Your Backend API Endpoint>'; // replace with your backend API endpoint

  constructor(private http: HttpClient) { }

  subscribeUser(userId: string, planId: string): Observable<any> {
    const payload = {
      userId,
      planId
    };
    
    return this.http.post(`${this.apiUrl}/subscribe`, payload);
  }
}
