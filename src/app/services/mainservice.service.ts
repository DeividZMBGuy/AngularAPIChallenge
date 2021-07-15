import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  servUrl = 'http://localhost:6661';


  constructor( private http:HttpClient ) { }

  httpConfig = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  public getToApi(){
    let url = this.servUrl + '/click'
    return this.http.get(url);
  }
}
