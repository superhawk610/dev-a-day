import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiRoot: string;

  constructor(
    @Optional() @Inject(APP_BASE_HREF) origin: string,
    private http: HttpClient,
  ) {
    this.apiRoot = `${origin || ''}/api`;
  }

  async subscribe(email: string): Promise<any> {
    return this.http
      .post<any>(`${this.apiRoot}/subscribe`, { email })
      .toPromise();
  }
}
