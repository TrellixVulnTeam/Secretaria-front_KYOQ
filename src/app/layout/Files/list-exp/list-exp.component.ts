import { Component, OnInit } from '@angular/core';
import { DbService } from "../../../db.service";
@Component({
  selector: 'app-list-exp',
  templateUrl: './list-exp.component.html',
  styleUrls: ['./list-exp.component.css']
})
export class ListExpComponent implements OnInit {

    files:any;
    editing: null;

    fileSerch = {
        search_dependence_number : "",
        search_number : "",
        search_final_number : "",
        search_initiator : "",
        search_concept : "",
        search_group : "",
        search_status : 1,
        page : 1,
        totPage : 0,
        perPage: 25
    };

    public alerts: Array<any> = [];

    constructor(private DB: DbService) {

        this.alerts= this.DB.alerts;

     }

  ngOnInit(): void {

   this.DB.File_list().subscribe({
       next:
            data =>{
                this.files = data;
                console.log(this.files);

            }
        })
    }


    public edit_file(id){
    this.editing = id;
    }
}
