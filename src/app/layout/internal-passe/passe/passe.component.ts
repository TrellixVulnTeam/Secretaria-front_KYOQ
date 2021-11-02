import { Component, OnInit } from '@angular/core';
import { DbService } from "../../../db.service";
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-passe',
  templateUrl: './passe.component.html',
  styleUrls: ['./passe.component.css']
})
export class PasseComponent implements OnInit {

    page = "http://localhost:8000/api/files/";

    id_exp : any;
    id_passe: any;

  newInternalPasse={
    responsable:"",
    response:"",
    to:"",
    to_date:"",


  }

    totPage= [];
    pagination: any;
    currentPage = 0;
    groups:any;

    passeSearch:any;
    passe: any;
    fileSerch :any;
    users:any;
    today: Date;

    public alerts: Array<any> = [];

    constructor(private DB: DbService, private router:Router ) {

        this.alerts= this.DB.alerts;

     }

  ngOnInit(): void {

    this.id_exp = localStorage.getItem('idEdit');
    this.id_passe = localStorage.getItem('idPasse');

    this.today = new Date();
    this.newInternalPasse.to_date =  formatDate(this.today,  'yyyy-MM-dd', 'en-US');

    this.currentPage = 1;

    this.DB.listExp(this.page + this.id_exp).subscribe(
        data => {
            this.fileSerch = data;
        });

    this.DB.searchInternalPasses(this.id_passe).subscribe(
        data => {
            this.passe = data;
        }
    );

    this.DB.searchPasse(this.id_passe).subscribe(
        data => {
            this.passeSearch = data;
        }
    );

    this.DB.userList().subscribe({
        next: data =>{
            this.users = data;
           }
        }
    );
}


     public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
        }

    updatePasse(itemId:any){

        var aux:any;


        this.DB.searchInternalPasse(itemId).subscribe({
            next: data =>{
                aux = data;
                aux.response = this.newInternalPasse.response;
                aux.responsable =  localStorage.getItem('name');
                aux.to = this.newInternalPasse.to;
                aux.to_date = this.newInternalPasse.to_date;

                this.DB.editInternalPasses(aux).subscribe({
                    next: data =>{
                        this.ngOnInit();
                        }
                    });
                }
            });
        }

}
