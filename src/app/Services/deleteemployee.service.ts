import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import BASE_URL from '../config/endPoint/url';
import {Observable} from "rxjs";
@Injectable({
    providedIn:"root"
})
export class DeleteEmployeeService{
 constructor(public http:HttpClient){}
 public  DeleteEmployee(data:any):Observable<any>{
 return this.http.delete(BASE_URL+"/delete",data);
 };
};