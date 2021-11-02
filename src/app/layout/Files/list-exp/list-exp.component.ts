import { Component, OnInit } from '@angular/core';
import { DbService } from "../../../db.service";
@Component({
  selector: 'app-list-exp',
  templateUrl: './list-exp.component.html',
  styleUrls: ['./list-exp.component.css']
})
export class ListExpComponent implements OnInit {

    totPage= [];
    pagination: any;
    currentPage = 0;
    lastRoute = localStorage.getItem("route");
    groups:any;

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

    this.currentPage = 1;
    var i = 0;

    this.DB.search(this.fileSerch).subscribe(
        data => {
            console.log(data);
            this.pagination = data;

            this.fileSerch.totPage = this.pagination.total / this.pagination.per_page;
            while (i < this.fileSerch.totPage) {
                this.totPage[i] = i+1;
                i++;

            }
        });
         this.DB.listGroup().subscribe(
             data=> {
                 this.groups = data;
             }
         );

  }

  firsPage(){

    this.currentPage = 1;
    var list =this.DB.search(this.fileSerch).subscribe(
        data => {
            this.pagination = data;
            console.log(data);
        });
  }
  nextPage(){
      if (this.fileSerch.page <  this.fileSerch.totPage){

        this.fileSerch.page ++;
        var list =this.DB.search(this.fileSerch).subscribe(
            data => {
                this.pagination = data;
                this.currentPage += 1;
                console.log(data);
                console.log("page " + this.currentPage);
         });
        }
  }
  prevPage(){
    if (this.fileSerch.page >  1){

    this.fileSerch.page --;
    var list =this.DB.search(this.fileSerch).subscribe(
        data => {
            this.pagination = data;
            this.currentPage -= 1;
            console.log(data);
            console.log("page " + this.currentPage);
        });
     }
  }
  goPage(id){

    var element = document.getElementById(id);
    var Eid = element.getAttribute("id");

    this.fileSerch.page = Number(Eid);
    var list =this.DB.search(this.fileSerch).subscribe(
        data => {
            this.pagination = data;
            this.currentPage = Number(Eid);
            console.log(data);
            console.log("page " + this.currentPage);
        });
  }
  editData($id){
    localStorage.setItem('idEdit', $id);
    localStorage.setItem('route', "/listExp");
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
    }

  search(){

        this.totPage= [];
        this.currentPage = 1;
        this.fileSerch.page = 1;
        var i = 0;

        var list =this.DB.search(this.fileSerch).subscribe(
            data => {
                console.log(data);
                this.pagination = data;

                this.fileSerch.totPage = this.pagination.total / this.pagination.per_page;
                while (i < this.fileSerch.totPage) {
                    this.totPage[i] = i+1;
                    i++;

                }
            });
    }

  verPasses($id){
    localStorage.setItem('idEdit', $id);
    localStorage.setItem('route', "/listExp");
    }

}
