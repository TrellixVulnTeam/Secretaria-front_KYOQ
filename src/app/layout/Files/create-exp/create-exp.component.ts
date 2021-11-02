import { Component, OnInit } from '@angular/core';
import { DbService } from "../../../db.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-exp',
  templateUrl: './create-exp.component.html',
  styleUrls: ['./create-exp.component.css']
})
export class CreateExpComponent implements OnInit {

    page = "http://localhost:8000/api/files/";
    groups: any;
    empty: boolean;
    firstSearch: boolean;
    activate: boolean;

    fileSearch = {
        search_id : "",
        search_dependence_number : "",
        search_number : "",
        search_final_number : "",
        search_initiator : "",
        search_concept : "",
        search_group : "",
        search_status : 0,
        page : 1,
        totPage : 0,
        perPage: 25
    };

    public alerts: Array<any> = [];

    constructor(private DB: DbService, private router:Router )  {
        this.alerts = this.DB.alerts;
     }

  ngOnInit(): void {
        this.empty = true;
        this.firstSearch= false;
        this.activate = false;


    this.DB.listGroup().subscribe(
        data=> {
            this.groups = data;
        }
    );
  }

  search(){

    if(this.fileSearch.search_dependence_number.length != 5 ||  this.fileSearch.search_number.length != 7 || this.fileSearch.search_final_number.length != 1 ){
        this.DB.alerts.push({
            id: 1,
            type: 'danger',
            message: "El numero ingresado es incorrecto"
        });
    }else{

        this.fileSearch.search_initiator = "";
        this.fileSearch.search_concept = "";
        this.fileSearch.search_group = "";
        this.fileSearch.search_status = 0;
        this.firstSearch = true;

        console.log(this.fileSearch);

        this.DB.search(this.fileSearch).subscribe(
            data=> {
                if (data.total == 0 ) {
                this.empty = true;

                }else{

                    this.fileSearch.search_id = data.data[0].id;
                    this.fileSearch.search_dependence_number = data.data[0].dependence_number;
                    this.fileSearch.search_number = data.data[0].number;
                    this.fileSearch.search_final_number = data.data[0].final_number;
                    this.fileSearch.search_initiator = data.data[0].initiator;
                    this.fileSearch.search_concept = data.data[0].concept;
                    this.fileSearch.search_group = data.data[0].group;
                    this.fileSearch.search_status = data.data[0].status;

                    this.empty = false;

                }
                this.firstSearch = true;

                if(this.firstSearch && this.empty){
                    this.activate = true;
                }

            });
        }
    }

  saveExp() {

    this.DB.createExp(this.fileSearch).subscribe({
        next: data => {
            localStorage.setItem('idEdit', data);
                this.DB.alerts.push({
                    id: 1,
                    type: 'success',
                    message: "Expediente Ingresado"
                });
                this.router.navigate(['/passes']);
            },
            error: error => {
                console.log(error);
                this.DB.alerts.push({
                    id: 1,
                    type: 'success',
                    message: error.menssage
                });
                this.router.navigate(['/listExp']);
           }
        })
        localStorage.setItem('route', "/passes");
    }

    verPasses($id){
        localStorage.setItem('idEdit', $id);
    }
    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
        }
}
