import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user.model";
import { Observable } from "rxjs/index";
import { ApiResponse } from "../model/api.response";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
  baseUrl: string = "http://localhost:8181/";
  userBaseUrl: string = "http://localhost:8181/users/";

  login(loginPayload): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      this.baseUrl + "login/generate-token",
      loginPayload
    );
  }

  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.userBaseUrl);
  }

  // getUserById(id: number): Observable<ApiResponse> {
  //   return this.http.get<ApiResponse>(this.baseUrl + id);
  // }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.userBaseUrl, user);
  }

  // updateUser(user: User): Observable<ApiResponse> {
  //   return this.http.put<ApiResponse>(this.userBaseUrl + user.id, user);
  // }

  // deleteUser(id: number): Observable<ApiResponse> {
  //   return this.http.delete<ApiResponse>(this.userBaseUrl + id);
  // }
}
