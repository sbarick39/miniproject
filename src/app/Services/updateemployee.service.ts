import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import BASE_URL from '../config/endPoint/url';
import {Observable} from "rxjs";

@Injectable({
    providedIn:"root"
})
export class UpdateEmployeeServices{
    constructor(public http:HttpClient){}
  public UpdateEmployee(data:any):Observable<any>{
      return this.http.put(BASE_URL+"/update",data);
  }
}