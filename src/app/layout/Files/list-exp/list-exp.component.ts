import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { DataService } from '../../../data.service';
import { DbService } from "../../../db.service";

@Component({
  selector: 'app-list-exp',
  templateUrl: './list-exp.component.html',
  styleUrls: ['./list-exp.component.css']
})
export class ListExpComponent implements OnInit {

    files:any;
    agrupations:any;

    editing: null;

    fileSerch = {
        search_dependence_number : "",
        search_central_number : "",
        search_final_number : "",
        search_initiator : "",
        search_concept : "",
        search_agrupation_id : "",
        search_status : 1,
        page : 1,
        totPage : 0,
        perPage: 25
    };

    public alerts: Array<any> = [];

    constructor(private DB: DbService, private DATA: DataService) {



        this.alerts = this.DB.alerts;

    }



    ngOnInit(): void {
            this.DB.File_list().subscribe({
                next:
                     data =>{
                         this.files = data;
                         console.log(this.files);

                        }});

            this.DB.Agrupations_list().subscribe({
                next:
                    data =>{
                        this.agrupations = data;
                    }});

        console.log(this.agrupations);

    }

////////////////////modification files//////////////////////////////


    public edit_file(id_file){

        this.editing = id_file;

        const aux = this.files.data.filter(x => x.id === id_file);
        this.fileSerch.search_agrupation_id = aux[0].agrupation_id;

        console.log( this.fileSerch.search_agrupation_id);

    }

    public cancel_update(){
       this.editing = null;
       this.DB.alerts.push({
        id: 1,
        type: 'danger',
        message: "Modificación Cancelada"
    })
    }

    public save_file(id){

        const data={
            id : id,
            agrupation_id : this.fileSerch.search_agrupation_id
          }
          console.log(data);


         this.DB.File_update(data).subscribe({
             next:
                 data =>{
                    this.DB.alerts.push({
                        id: 1,
                        type: 'success',
                        message: "Expediente Modificado"
                    })
                },
                    error:
                        err =>{
                            this.DB.alerts.push({
                                id: 1,
                                type: 'danger',
                                message: err
                        });
                     this.ngOnInit();

                 }});
        this.editing = null;
    }

////////////////////seach file//////////////////////////////

    public search(){

        console.log(this.fileSerch);

       if(this.fileSerch!= null){

            this.DB.File_search(this.fileSerch).subscribe({
                next:
                data =>{
                    this.files = data;
                    console.log(this.files);

                }});
            }else{
                this.DB.File_list().subscribe({
                    next:
                         data =>{
                             this.files = data;
                             console.log(this.files);

                            }});

            }


    }


////////////////////paginations//////////////////////////////

    public goToUrl(url:any){

        this.DB.GoToUrl(url).subscribe({
            next:
                 data =>{
                     this.files = data;
                     console.log(this.files);

                    }});

    }

////////////////////alerts//////////////////////////////

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

}
