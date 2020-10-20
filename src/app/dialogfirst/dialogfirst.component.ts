import { Component, OnInit } from '@angular/core';
import {DialogsecondComponent} from "../dialogsecond/dialogsecond.component"
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-dialogfirst',
  templateUrl: './dialogfirst.component.html',
  styleUrls: ['./dialogfirst.component.css']
})
export class DialogfirstComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
 Opendialog(){
   this.dialog.open(DialogsecondComponent)
 }
}
