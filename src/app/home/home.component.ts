import { Component, OnInit } from '@angular/core';

import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
  	public dialog: MatDialog) { }

  ngOnInit() {
  }

  toLogin() {
	  let dialogRef = this.dialog.open(LoginComponent, {
		  height: '220px',
		  width: '300px',
		});
  }

  toRegister() {
	  let dialogRef = this.dialog.open(RegisterComponent, {
		  height: '400px',
		  width: '600px',
		});
  }

}
