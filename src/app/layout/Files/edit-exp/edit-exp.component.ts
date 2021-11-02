import { Component, OnInit } from '@angular/core';
import { DbService } from "../../../db.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

    exp:any;
    groups:any;

    page = "http://localhost:8000/api/files/";

    idEdit = localStorage.getItem('idEdit');

  constructor(private DB: DbService, public router: Router ) {

  }

  ngOnInit(): void {

    this.DB.listGroup().subscribe(
        data=> {
            this.groups = data;
        }
    );

    this.DB.listExp(this.page + this.idEdit).subscribe(
        data => {
            console.log(data);
            this.exp = data;
        });
  }
  saveBtn(){
    return this.DB.editExp(this.exp).subscribe({
        next: data => {
                console.log(data);
                this.DB.alerts.push({
                    id: 1,
                    type: 'success',
                    message: "Expediente Modificado"
                });
                this.router.navigate(['/listExp']);
            },
            error: error => {
                console.log(error);
                this.DB.alerts.push({
                    id: 1,
                    type: 'success',
                    message: "Modificacion Cancelada"
                });
                this.router.navigate(['/listExp']);
           }
        })
     }
     cancelBtn(){
        this.DB.alerts.push({
            id: 1,
            type: 'success',
            message: "Modificacion Cancelada"
        });
        this.router.navigate(['/listExp']);
     }
 }
