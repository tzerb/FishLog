import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FishLogService {
  private apiUrl = 'https://localhost:7145/weatherforecast';

  constructor(private http: HttpClient) {}

    getData(): Observable<any> {
        return this.http.get(this.apiUrl);
  }
}
