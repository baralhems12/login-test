import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "./service/api.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./core/interceptor";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
  declarations: [AppComponent, SignupComponent],
  imports: [BrowserModule, routing, ReactiveFormsModule, HttpClientModule],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
