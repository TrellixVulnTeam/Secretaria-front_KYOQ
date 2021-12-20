import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { DbService } from '../../db.service';

@Component({
  selector: 'app-dependecies',
  templateUrl: './dependecies.component.html',
  styleUrls: ['./dependecies.component.css']
})
export class DependeciesComponent implements OnInit {

    offices:any;
    alerts:any;

    Offcie_search = {
        name: "",
        internal: "",
        SIE:"",
        email: "",
        order_by:"name",
        order:"asc"
    }

    constructor(private DB: DbService, private DATA: DataService, private router: Router) {

        this.alerts = this.DB.alerts;

    }


  ngOnInit(): void {

    this.search_office();
  }

  public search_office() {

    console.log(this.Offcie_search);

    this.offices = this.DB.Offices_search(this.Offcie_search).subscribe({
        next:
             data => {
            this.offices = data;
            console.log(data);

            }
    })
  }

  public goToUrl(url:any){

    this.DB.GoToUrlFile(url, this.Offcie_search).subscribe({
        next:
             data =>{
                this.offices = data;
                console.log(this.offices);

               }});
    }

    public invert_order(){
        var elemento = document.getElementById("arrow");

        if(this.Offcie_search.order === "asc"){
            this.Offcie_search.order = "desc";
            elemento.classList.remove('rotate180');

        }
        else {
            this.Offcie_search.order= "asc";
            elemento.classList.add('rotate180');
        }



    }
}
