import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { AddEmployeeServices } from '../Services/addemployee.service';
import { DeleteEmployeeService } from '../Services/deleteemployee.service';
import { EmployeeService } from '../Services/employee.service';
import { UpdateEmployeeServices } from '../Services/updateemployee.service';
//import errorHandling function
import errorHandling from '../config/error/errorHandling';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'ems',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public records:any;
  public obj1:any;
  public dataSource:MatTableDataSource<any>
  public displayColumns:string[]=["Check","SNO","empId","Name","Age","Salary","Department","DOB","Gender","Languages","Actions"]


  constructor(public allEmployee:EmployeeService,
               public addEmployee:AddEmployeeServices,
               public updateEmployee:UpdateEmployeeServices,
               public deleteEmployee:DeleteEmployeeService) { 
                 
               }

  ngOnInit(): void {
    this.obj1=this.allEmployee.getEmployees().subscribe((posRes)=>{
      this.records=posRes; 
      this.dataSource=new MatTableDataSource(this.records)
    },errorHandling)

    }
    ngOnDestroy(){
      this.obj1.unsubscribe();
    }
  }


