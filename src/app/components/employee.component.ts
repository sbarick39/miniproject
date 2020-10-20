import { Component, OnInit ,ViewChild} from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { AddEmployeeServices } from '../Services/addemployee.service';
import { DeleteEmployeeService } from '../Services/deleteemployee.service';
import { EmployeeService } from '../Services/employee.service';
import { UpdateEmployeeServices } from '../Services/updateemployee.service';
//import errorHandling function
import errorHandling from '../config/error/errorHandling';
import {MatTableDataSource} from "@angular/material/table";
import { element } from 'protractor';
import {MatPaginator} from "@angular/material/paginator"

@Component({
  selector: 'ems',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public records:any;
  public obj1:any;
  @ViewChild(MatPaginator,{static:true})
  public paginator:MatPaginator;
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
      this.dataSource=new MatTableDataSource(this.records);
       this.dataSource.paginator=this.paginator;
    },errorHandling);
    }
    
   
    deleteEmp(empId){
      this.deleteEmployee.DeleteEmployee({"empId":empId}).subscribe((posRes)=>{
        if (posRes.delete== "success"){
       
          this.records.splice(0,1);
        this.dataSource=new MatTableDataSource(this.records)
      
        }
          }) 
      }
    
     

    
    eaditEmp(){
      console.log("eadit soon..")
    }
    
    ngOnDestroy(){
      this.obj1.unsubscribe();
    }
  }


