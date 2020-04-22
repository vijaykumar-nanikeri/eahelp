import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './shared/core/auth.interceptor';

import { AppComponent } from './app.component';

// The routing module is recommended to be imported after all components get imported.
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    // Providing the auth-interceptor which updates each REST API body of the application.
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  // Using AppComponent as an initial bootstrap-able component.
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
