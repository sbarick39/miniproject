import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import BASE_URL from '../config/endPoint/url';
import {Observable} from "rxjs";

@Injectable({
    providedIn:"root"
})
export class AddEmployeeServices{
    constructor(public http:HttpClient){}
    public AddEmployees(data:any):Observable<any>{
   return this.http.post(BASE_URL+"/insert",data);
    }
}