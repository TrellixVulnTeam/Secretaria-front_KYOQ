import { Component, OnInit } from '@angular/core';
import { DbService } from "../../../db.service";
import {formatDate} from '@angular/common';

//PDF
import { PdfMakeWrapper, Img, Txt } from "pdfmake-wrapper";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

@Component({
  selector: 'app-passes',
  templateUrl: './passes.component.html',
  styleUrls: ['./passes.component.css']
})
export class PassesComponent implements OnInit {

    page = "http://localhost:8000/api/files/";



    id_exp : any;
    passes : any;
    newPasse = {
        id:"",
        passe_id:"",
        file_id:"",
        from: "",
        from_date:"",
        to:"",
        to_date:"",
        status:"",
        response:"",
        responsable:localStorage.getItem('name'),
    };
    today:Date;
    totPage= [];
    pagination: any;
    currentPage = 0;
    groups:any;
    fileSerch :any;
    closed: boolean;
    offices:any;

    public alerts: Array<any> = [];

    constructor(private DB: DbService) {

        this.today = new Date();
        this.newPasse.from_date =  formatDate(this.today,  'yyyy-MM-dd', 'en-US');
        this.newPasse.to_date =  formatDate(this.today,  'yyyy-MM-dd', 'en-US');
        this.newPasse.file_id = localStorage.getItem('idEdit');
        this.newPasse.status = "true";
        this.alerts= this.DB.alerts;

    }

    ngOnInit(): void {

    this.closed = false;
    this.id_exp = localStorage.getItem('idEdit');

    this.currentPage = 1;
    var i = 0;

    this.DB.listOffices().subscribe({
        next: data =>{
            this.offices = data;
        }
    });

    this.DB.listExp(this.page + this.id_exp).subscribe({
        next: data => {
            this.fileSerch = data;
         }});


         this.DB.searchPasses(this.id_exp).subscribe({
       next: data => {
            this.passes = data;

            if(this.passes.data[this.passes.data.length -1].status === "true"){ this.closed=true;}else{this.closed=false;}
        }});

    }

    search(){

        this.totPage= [];
        this.currentPage = 1;
        this.fileSerch.page = 1;

        this.DB.search(this.fileSerch).subscribe(
            data => {
                this.fileSerch = data;
                });
    }

     addPasse(){
        var pase_id;
        this.newPasse.status = "true";
        this.DB.createPasses(this.newPasse).subscribe({

            next: data => {
                localStorage.setItem('idEdit', data);
                this.newPasse.passe_id = data;

                this.DB.createInternalPasses(this.newPasse).subscribe({

                    next: data => {
                                this.DB.alerts.push({
                                    id: 1,
                                    type: 'success',
                                    message: "Pase intero creado"
                                });
                            },
                    error: error => {
                       this.DB.alerts.push({
                            id: 1,
                            type: 'success',
                            message: error.message
                        });
                       }
                    });




                this.DB.alerts.push({
                        id: 1,
                        type: 'success',
                        message: "Pase Ingresado"
                    });
                        this.DB.searchPasses(this.id_exp).subscribe({
                            next: data => {
                                this.passes = data;
                                if(this.passes.data[this.passes.data.length -1].status === "true"){ this.closed=true;}else{this.closed=false;}
                                this.ngOnInit();
                        }});

            },
            error: error => {
                console.log(error);
                this.DB.alerts.push({
                    id: 1,
                    type: 'success',
                    message: error.message
                });
               }
            });

    }

    updatePasse(passe_id){
        this.newPasse.id = passe_id;
       this.newPasse.response = this.passes.data[this.passes.total -1].response;

        if (this.newPasse.response == ""){
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
             this.newPasse.status = 'false';
             this.DB.updatePasses(this.newPasse).subscribe({
                 next: data => {

                     this.newPasse = {
                        id:"",
                        passe_id:"",
                        file_id:"",
                        from: "",
                        from_date:formatDate(this.today,  'yyyy-MM-dd', 'en-US'),
                        to:"",
                        to_date:formatDate(this.today,  'yyyy-MM-dd', 'en-US'),
                        status:"",
                        response:"",
                        responsable:localStorage.getItem('name'),
                    };
                     var exp= {
                         status: 0
                     };
                      this.DB.editExp(exp);
                     this.ngOnInit();
                    },
                     error: err =>{
                         console.log(err);
                     }
                 });
             }

            console.log(this.newPasse);
    }


     seePasse(passe_id){
         localStorage.setItem("idPasse",passe_id);
    }

     closePasse(passe_id){
        localStorage.setItem("idPasse",passe_id);
    }

     public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }


   async PDFCreate(){

       // Set the fonts to use
       PdfMakeWrapper.setFonts(pdfFonts);

       const pdf = new PdfMakeWrapper();


       pdf.info({
           title: 'Providencia',
           author: 'Secretaría de Educación',
           subject: 'subject of document',
        });

        pdf.pageSize('A4');
        pdf.pageMargins([ 40, 60, 40, 60 ]);

        // pdf.images({
        //     picture1: await new Img('https://www.santafe.gov.ar/boletinoficial/escudo-2019.png').build(),
        // });


        pdf.add(new Txt('Epediente N°: ' + this.fileSerch.dependence_number + "-" + this.fileSerch.number + "-" + this.fileSerch.final_number).alignment('right').end);
        pdf.add(new Txt('Ref.: ' + this.fileSerch.concept).alignment('right').end);
        pdf.add(pdf.ln(6));
        pdf.add(new Txt('"SANTA FE, "Cuna de la Constitución Nacional"                                        .' ).alignment('right').end);
        pdf.add(pdf.ln(3));
        pdf.add(new Txt(".                        " + this.passes.data[this.passes.data.length - 1].response).alignment('justify').end);



        pdf.create().print();
    }

    public exportProvi(){
        console.log();

    }
}
