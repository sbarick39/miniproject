//the service are used to featch the data all employees from server (Node server);
//import injectable
//injectable are used to create the service
import { Injectable} from "@angular/core";
//import HttpClient
//Http client used to make asyn call and connet to server
import {HttpClient} from "@angular/common/http";
import BASE_URL from '../config/endPoint/url';
import { Observable } from 'rxjs';
//import BASE_URL from "../config/endPoints/url"

@Injectable({
    providedIn:"root"
})
export class EmployeeService {
     constructor(public http:HttpClient){
       
     }
     public getEmployees():Observable<any>{
         return this.http.get(BASE_URL+"/allEmployee");
     }
}
