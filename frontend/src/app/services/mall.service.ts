import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MallService {
  get_mall_url = 'http://localhost:3000/api/getMall/mall/';

  constructor(private http: HttpClient) { }

  getMall(mall){
    console.log("Api is working fine");
    return this.http.get(this.get_mall_url + mall);
  }

}
