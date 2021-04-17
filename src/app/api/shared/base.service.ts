import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  static readonly API_V1 = environment.API_BASE_URL + '';

  protected constructor(protected http: HttpClient) { }

  getBaseUrl(): string {
    return BaseService.API_V1;
  }

  abstract getClassUrl(): string;

  getUrl(): string {
    return `${this.getBaseUrl()}${this.getClassUrl()}`;
  }

  protected getHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getList(url, filter) {
    let params = new HttpParams();
    const map = new Map(Object.entries(filter));
    for (let [key, value] of map.entries()) {
      params = params.append(key, value.toString());
    }
    return this.http.get(`${url}`, {params: params, headers: this.getHeader()});
  }
}
