import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private url: string;

  constructor(private http: HttpClient){
    this.url = 'http://localhost:27017';
  }

  getGeo() {
    const url = 'http://ip-api.com/json/';
    return this.http.get(url);
  }

  getAll() {
    return this.http.get(`${this.url}/ips`);
  }

  addGeo(geo: Geo) {
    const obj = Object.assign({}, geo);
    delete obj.as;
    return this.http.post(`${this.url}/ips/add`, obj);
  }

}

export interface Geo {
  as: string;
  city: string;
  country: string;
  countryCode: string;
  isp: string;
  lat: number;
  lon: number;
  org: string;
  query: string;
  region: string;
  regionName: string;
  status: string;
  timezone: string;
  zip: string;
}