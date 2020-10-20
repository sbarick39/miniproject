import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';



export const arr:any[]=[MatTableModule,MatButtonModule,MatIconModule,MatMenuModule,MatPaginatorModule,MatDialogModule]
@NgModule({
  declarations: [],
  imports: [
    arr,
  ],
  exports:[
    arr
  ]
})
export class MaterialsModule { }
