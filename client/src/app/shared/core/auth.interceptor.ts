import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  /**
   * @param  {HttpRequest<any>} request
   * @param  {HttpHandler} next
   * @returns Observable
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Cloning the request body and updating the URL in it, by prefixing the root path.
    const clonedRequest: any = request.clone({
      // PROD: Default URL. Enabled during deployment.
      // url: request.url

      // DEV: Enabled for development purposes only.
      url: this.getConsolidatedUrl(request.url)
    });

    return next.handle(clonedRequest);
  }

  // DEV: Enabled for development purposes only.
  /**
   * @param  {string} url
   * @returns string
   */
  private getConsolidatedUrl(url: string): string {
    if (url.charAt(0) === '/') url = url.substr(1);

    // Prefixing the root path.
    return `${environment.apiUrl}/${url}`;
  }

}
