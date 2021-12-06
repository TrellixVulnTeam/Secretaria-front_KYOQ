import { Component, OnInit } from '@angular/core';
import { DbService } from "../../../db.service";
import { DataService } from "../../../data.service";
import {formatDate} from '@angular/common';
import { Router } from '@angular/router';

//PDF
import { PdfMakeWrapper, Img, Txt } from "pdfmake-wrapper";
import * as pdfFonts from "pdfmake/build/vfs_fonts";


@Component({
    selector: 'app-passes',
    templateUrl: './passes.component.html',
    styleUrls: ['./passes.component.css']
})
export class PassesComponent implements OnInit {


    file :any;
    passes : any;
    offices:any;

    newPasse = {
        id:"",
        passe_id:"",
        file_id:"",
        from: "",
        from_date:"",
        to:"",
        to_date:"",
        status:true,
        response:"",
        responsable:localStorage.getItem('id'),
        responsable_name: localStorage.getItem("name"),
    };
    today:Date;
    groups:any;
    closed: boolean;
    editing:boolean;
    ready_print:boolean;

    public alerts: Array<any> = [];

    constructor(private DB: DbService, private DATA: DataService, private router: Router) {

        this.alerts= this.DB.alerts;

    }

    ngOnInit(): void {

        this.today = new Date();
        this.newPasse.from_date =  formatDate(this.today,  'yyyy-MM-dd hh:mm:ss' , 'en-US');
        this.newPasse.to_date =  formatDate(this.today,  'yyyy-MM-dd hh:mm:ss', 'en-US');

        this.file =  this.DATA.file[0];
        this.newPasse.file_id = this.file.id;

        this.DB.External_passe_search(this.file.id).subscribe({
        next: data => {
                this.passes = data;

                if(!this.passes.data[0].status){
                    this.closed=true;
                    this.newPasse.to = this.passes.data[0].to;
                }else{
                    this.closed=false;
                }

                if(!this.passes.data[0].to){
                   this.editing = true;
                }else{
                    this.editing=false;
                }

            }});
        this.DB.Offices_list().subscribe({
            next: data=> {
                this.offices = data;
            }
        })
    }

      addPasse(){

         this.newPasse.status = false;
         this.closed = false;
         this.DB.External_passe_create(this.newPasse).subscribe({

             next: data => {
                this.DB.alerts.push({
                    id: 1,
                    type: 'success',
                    message: 'Pase Agregado'
                    });


                const new_internal_passe = {
                    from: this.newPasse.responsable,
                    from_date: this.newPasse.from_date,
                    responsable: this.newPasse.responsable,
                    status: this.newPasse.status,
                    external_passe: data.id,
                }
                this.DB.internal_passe_create(new_internal_passe).subscribe({
                    next: data=>{
                        this.DB.alerts.push({
                            id: 1,
                            type: 'success',
                            message: 'Pase interno agregado'
                        });

                        this.seePasse(data.external_passe);
                        this.router.navigate(['/passe']);
                    },
                    error: error => {
                        console.log(error);
                        this.DB.alerts.push({
                            id: 1,
                            type: 'danger',
                            message: error.message
                        });
                    }
                })
            },
                error: error => {
                    console.log(error);
                    this.DB.alerts.push({
                    id: 1,
                    type: 'danger',
                    message: error.message
                    });
                }
            });


     }

     updatePasse(passe_id){

        if(this.passes.data[passe_id].response == ""){
             this.DB.alerts.push({
                 id: 1,
                 type: 'success',
                 message:"Falta Completar respuesta"
             });
         }

         else if (this.newPasse.to == ""){
             this.DB.alerts.push({
                 id: 1,
                 type: 'success',
                 message:"Falta completar destino"
             });
         }
         else if (this.newPasse.to_date == ""){
             this.DB.alerts.push({
                 id: 1,
                 type: 'success',
                 message:"Falta completar fecha de cierre"
             });
         }
          else{


            this.newPasse.id = this.passes.data[passe_id].id;
            this.newPasse.status = false;
            this.closed = false;

              this.DB.External_passe_update(this.newPasse).subscribe({
                  next: data => {

                        this.ngOnInit();
                     },
                      error: err =>{
                          console.log(err);
                      }
                  });


              }
     }

     public close_external_passe(passe_id){
        console.log('si aca');

        console.log(this.passes.data[passe_id].response);

       if(this.passes.data[passe_id].response == null){
            this.DB.alerts.push({
                id: 1,
                type: 'danger',
                message:"Falta Completar respuesta"
            });
        }

        else if (this.passes.data[passe_id].to == ""){
            this.DB.alerts.push({
                id: 1,
                type: 'danger',
                message:"Falta completar destino"
            });
        }

        else{


           this.newPasse.id = this.passes.data[passe_id].id;
           this.newPasse.status = true;
           this.closed = true;


             this.DB.File_close(this.passes.data[passe_id].file.id).subscribe({
                 next: data => {
                        this.DB.External_passe_close(this.passes.data[passe_id].id).subscribe({
                            next: data => {
                               this.ngOnInit();
                            },
                            error: err =>{
                                console.log(err);
                            }
                        });

                    },
                     error: err =>{
                         console.log(err);
                     }
                 });


             }

             this.newPasse.from = "";
             this.newPasse.to = "";
     }

     editPasse(){
         this.editing=true;
     }

      public closeAlert(alert: any) {
         const index: number = this.alerts.indexOf(alert);
         this.alerts.splice(index, 1);
     }

     seePasse(file_id){
         this.DATA.External_passe_edit_id = file_id;
     }

     public goToUrl(url:any){

        this.DB.GoToUrl(url).subscribe({
            next:
                 data =>{
                     this.passes = data;
                     console.log(this.passes);

                    }});

    }

    public exports(id){
        console.log(id);

        this.DB.External_passe_export(id);
    }

}
