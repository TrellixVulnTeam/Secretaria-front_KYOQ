import { Component, OnInit } from '@angular/core';
import { DbService } from "../../../db.service";
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-passe',
  templateUrl: './passe.component.html',
  styleUrls: ['./passe.component.css']
})
export class PasseComponent implements OnInit {

  newInternalPasse={
    id:"",
    from:0,
    from_date:"",
    responsable:"",
    response:"",
    to:0,
    to_date:"",
    status:"",
    external_passe:"",
    file_id:0
    }

    searchModalProvi={
        id:"",
        name:"",
        text:"",
        office_id:""
    }

    totPage= [];
    pagination: any;
    currentPage = 0;
    groups:any;
    provis:any;

    offices:any;
    passeSearch:any;
    internal_passes: any;
    external_passe:any;
    external_passe_from:any;
    external_passe_id:any;
    file :any;
    fileClose:boolean;
    users:any;
    today: Date;
    aux:any;
    closeResult = '';

    public alerts: Array<any> = [];

    constructor(private DB: DbService, private router:Router, private DATA: DataService, private modalService: NgbModal ) {

        this.alerts= this.DB.alerts;

    }

  ngOnInit(): void {

    this.DB.Provis_list(this.searchModalProvi).subscribe({
        next: data=>{
            this.provis = data;
            console.log(data);

        }
    })

    this.file =this.DATA.file;

    this.newInternalPasse.file_id = this.file[0].id;
    this.fileClose = this.file[0].status;
    this.external_passe_id = this.DATA.External_passe_edit_id;




    this.DB.internal_passe_search(this.external_passe_id).subscribe({
        next: data => {
            this.internal_passes = data;
            this.external_passe =this.internal_passes.data[0].external_passe;
            this.newInternalPasse.response = this.internal_passes.data[0].response;

        }
    });

    this.DB.Offices_list().subscribe({
        next: data => {
            this.aux = data;
            this.offices = this.aux.data;

            this.external_passe_from = this.offices.filter(x => x.id == this.external_passe.from);

        }
    })

    this.DB.userList().subscribe({
        next: data=>{
            this.users = data;
        }
    })

    this.today = new Date();

    this.newInternalPasse.to_date =  formatDate(this.today,  'dd-MM-yyyy HH:mm:ss', 'es-AR');
    this.currentPage = 1;
    }

    public internal_passe_create(){

        this.newInternalPasse.from = Number(localStorage.getItem("id"));
        this.newInternalPasse.external_passe = this.external_passe_id;
        this.newInternalPasse.from_date = formatDate(this.today,  'dd-MM-yyy HH:mm:ss', 'es-AR');
        this.newInternalPasse.status = "0";
        this.newInternalPasse.to_date = null;
        console.log(this.newInternalPasse);

        this.DB.internal_passe_create(this.newInternalPasse).subscribe({
            next: data=>{
                console.log(data);
                this.ngOnInit();
            }
        });

    }

    public internal_passe_update(id){

        this.newInternalPasse.responsable = localStorage.getItem("id");
        this.newInternalPasse.status = "1";
        this.newInternalPasse.to_date = formatDate(this.today,  'yyyy-MM-dd HH:mm:ss', 'en-US');
        this.newInternalPasse.external_passe = this.external_passe_id;
        this.newInternalPasse.id = id;

        this.DB.internal_passe_update(this.newInternalPasse).subscribe({
            next: data=>{

                this.newInternalPasse.from = this.newInternalPasse.to;
                this.newInternalPasse.from_date = formatDate(this.today,  'yyyy-MM-dd HH:mm:ss', 'en-US');
                this.newInternalPasse.status = "0";
                this.newInternalPasse.to = null;
                this.newInternalPasse.to_date = null;
                console.log(this.newInternalPasse);

                this.DB.internal_passe_create(this.newInternalPasse).subscribe({
                    next: data=>{
                        this.ngOnInit();
                     }

                })

                this.ngOnInit();
            }
        });
    }

    public open_provis_models(){

    }

    public goToUrl(url:any){

        this.DB.GoToUrl(url).subscribe({
            next:
                 data =>{
                     this.internal_passes = data;
                     console.log(this.internal_passes);

                    }});

    }

     public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

//////////////////MODAL/////////////////////
    open(content) {

        this.aux = this.newInternalPasse.response;

        this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
          this.newInternalPasse.response = result;

        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }


      private getDismissReason(reason: any): string {

        this.newInternalPasse.response = this.aux;

        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return `with: ${reason}`;
        }
      }

      public goToUrlModal(url:any){

        const data = {
            name: this.searchModalProvi.name,
            office_id:this.searchModalProvi.office_id
        }
        this.DB.GoToUrlFile(url, data).subscribe({
            next:
                 data =>{
                     this.provis = data;
                     console.log(this.provis);

                    }});

        }

        public searchModal(){

            this.DB.Provis_list(this.searchModalProvi).subscribe({
                next: data=>{
                    this.provis = data;
                    console.log(data);

                }
            })
        }
}
