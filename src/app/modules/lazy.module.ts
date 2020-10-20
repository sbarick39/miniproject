import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeComponent} from "../components/employee.component";
import { HttpClientModule } from '@angular/common/http';
import { MaterialsModule } from '../materials.module';
import { AddEmployeeServices } from '../Services/addemployee.service';
import { EmployeeService } from '../Services/employee.service';
import { UpdateEmployeeServices } from '../Services/updateemployee.service';
import { DeleteEmployeeService } from '../Services/deleteemployee.service';
import { RouterModule } from '@angular/router';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialsModule,
    NgHttpLoaderModule.forRoot(),
    RouterModule.forChild([{path:"",component:EmployeeComponent}])
  ],
  providers:[
    AddEmployeeServices,
    EmployeeService,
    UpdateEmployeeServices,
    DeleteEmployeeService
  ],
  exports:[EmployeeComponent]
})
export class LazyModule { }
