import { FunctionExpr } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import{MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialogsecond',
  templateUrl: './dialogsecond.component.html',
  styleUrls: ['./dialogsecond.component.css']
})
export class DialogsecondComponent implements OnInit {

  constructor(public dialogref:MatDialogRef<DialogsecondComponent>,
                    @Inject(MAT_DIALOG_DATA) public data:MatDialog ) { }

  ngOnInit(): void {
   
  }
  funOne(){
    this.dialogref.close()
  }
  funtwo(){

  }
}
