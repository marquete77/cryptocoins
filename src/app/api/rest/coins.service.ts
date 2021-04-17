import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from '../shared/base.service';

@Injectable({
  providedIn: 'root'
})
export class CoinsService extends BaseService {

  constructor(protected http: HttpClient) {
    super(http)
  }

  getClassUrl(): string {
    return 'coins';
  }

  getListCoins(filter) {
    return this.getList(`${this.getUrl()}/markets`, filter)
  }

  getCoin(id) {
    return this.http.get(`${this.getUrl()}/${id}`, {headers: this.getHeader()})
  }

}
