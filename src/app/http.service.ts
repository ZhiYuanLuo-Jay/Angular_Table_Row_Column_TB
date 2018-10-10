import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient){}


  getJSON(){
    return this._http.get("./assets/bt_report.json"); // Adding a service, it make a request
  }

}
