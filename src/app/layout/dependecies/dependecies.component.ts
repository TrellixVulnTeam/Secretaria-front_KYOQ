import { Component, OnInit, ViewChild, ElementRef, HostListener, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { off } from 'process';
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
    editing: null;

    changeOffice = {
        id:"",
        internal_phone:"",
        email:"",
        alternative_email:"",
        officer_in_charge:""
    }


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

    public changeEditing (office){
        this.editing = office.id;
        this.changeOffice = {
            id : office.id,
            internal_phone: office.internal_phone,
            email: office.email,
            alternative_email: office.alternative_email,
            officer_in_charge: office.officer_in_charge,
        }

    }
    public save(id, index){

        this.DB.Offices_edit(this.changeOffice).subscribe({
            next: data => {
                console.log(data);
                this.offices.data[index] = data;
                console.log(index);

            }
        })
        this.editing = null;
    }

    public exportToExcel(){
        this.DB.Offices_export(this.Offcie_search).subscribe({
            next:
                 data => {
                    console.log(data);

                }
        })
    }
}
