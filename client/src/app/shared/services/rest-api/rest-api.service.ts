import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  /**
   * @param  {string} url
   * @returns Observable
   */
  public get(url: string): Observable<Object> {
    return this.http.get(url);
  }

  /**
   * @param  {string} url
   * @param  {any={}} data
   * @returns Observable
   */
  public post(url: string, data: any = {}): Observable<Object> {
    return this.http.post(url, data);
  }

}
