import { FunctionExpr } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import{MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-conformation',
  templateUrl: './conformationModal.component.html',
  
})
export class ConformationModalComponent implements OnInit {

  constructor(public dialogref:MatDialogRef<ConformationModalComponent>,
                    @Inject(MAT_DIALOG_DATA) public data:MatDialog ) { }

  ngOnInit(): void {
   
  }
  funOne(){
    this.dialogref.close()
  }
  funtwo(){

  }
}
