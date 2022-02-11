import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DbService } from "../../../db.service";
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';

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
    aux:any;


    fileSearch = {
        search_id : "",
        search_dependence_number : "",
        search_number : "",
        search_final_number : "",
        search_initiator : "",
        search_concept : "",
        search_group : "",
        search_status : 0,
        search_user_id: localStorage.getItem('id'),
        page : 1,
        totPage : 0,
        perPage: 25
    };

    public alerts: Array<any> = [];


    @ViewChild('N1') N1:ElementRef;
    @ViewChild('N2') N2:ElementRef;
    @ViewChild('N3') N3:ElementRef;
    @ViewChild('BSearch') BSearch:ElementRef;
    @ViewChild('Init') Init:ElementRef;
    @ViewChild('SeePasses') SeePasses:ElementRef;


    @HostListener('window:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
        case 'Enter':
        if(!this.firstSearch) {this.search(); this.changeFocus(4); break;}

        if(this.empty && !this.firstSearch){
                this.saveExp();
                console.log("vaaa a save");
            }
        break;
        case "Escape":
            this.router.navigate(['/listExp']);


            break;

        default:
            break;
    }
  }


    constructor(private DB: DbService, private router:Router, private DATA: DataService )  {
        this.alerts = this.DB.alerts;
     }

    ngOnInit(): void {
        this.empty = true;
        this.firstSearch= false;
        this.activate = false;



    this.DB.Agrupations_list().subscribe(
        data=> {
            this.groups = data;
        }
    );
  }

  ngAfterViewInit() {
    this.N1.nativeElement.focus();
  }


  search(){

    if(this.fileSearch.search_dependence_number.length != 5 ||  this.fileSearch.search_number.length != 7 || this.fileSearch.search_final_number.length != 1 ){
        this.DB.alerts.push({
            id: 1,
            type: 'danger',
            message: "El numero ingresado es incorrecto"
        });
    }else{

        const validate = {
            search_dependence_number : this.fileSearch.search_dependence_number,
            search_central_number :this.fileSearch.search_number ,
            search_final_number : this.fileSearch.search_final_number

        }

        console.log(this.fileSearch);

        this.DB.File_validation_create(validate).subscribe(
            data=> {
                this.aux = data;

                if (this.aux.total == 0 ) {
                this.empty = true;
                this.fileSearch.search_id = "";
                this.fileSearch.search_initiator = "";
                this.fileSearch.search_concept = "";
                this.fileSearch.search_group = "";
                this.fileSearch.search_status = 1;

                }else{

                    this.fileSearch.search_id = this.aux.data[0].id;
                    this.fileSearch.search_dependence_number = this.aux.data[0].dependence_number;
                    this.fileSearch.search_number = this.aux.data[0].central_number;
                    this.fileSearch.search_final_number = this.aux.data[0].final_number;
                    this.fileSearch.search_initiator = this.aux.data[0].initiator;
                    this.fileSearch.search_concept = this.aux.data[0].concept;
                    this.fileSearch.search_group = this.aux.data[0].agrupation.name;
                    this.fileSearch.search_status = this.aux.data[0].status;

                    this.empty = false;

                }
                this.firstSearch = true;

                if(this.firstSearch && this.empty){
                    this.activate = true;
                }else{
                    this.activate = false;
                }

                this.changeFocus(4);

            });
        }

    }

  saveExp() {


    const new_file={
        'dependence_number' : this.fileSearch.search_dependence_number,
        'central_number': this.fileSearch.search_number,
        'final_number' : this.fileSearch.search_final_number,
        'initiator' : this.fileSearch.search_initiator,
        'concept' : this.fileSearch.search_concept,
        'status' : this.fileSearch.search_status,
        'site_id' : this.fileSearch.search_user_id,
        'agrupation_id' : this.fileSearch.search_group,
        'user_id' : this.fileSearch.search_user_id
        }

         this.DB.File_create(new_file).subscribe({
             next: data => {

                 this.DATA.file = data;
                 this.DATA.File_id = this.DATA.file.id;
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
                     type: 'danger',
                     message: error.menssage
                 });
                 this.router.navigate(['/listExp']);
            }
         })
    }

    public see_passe(id_file){
        this.DATA.file = this.aux.data.filter(x => x.id == id_file)
    }

    public changeFocus(n){

        if (n === 1 && this.fileSearch.search_dependence_number.length === 5){
        this.N2.nativeElement.focus();}

        if (n === 2 && this.fileSearch.search_number .length === 7){
        this.N3.nativeElement.focus();}

        if (n === 3 && this.fileSearch.search_final_number.length === 1){
        this.BSearch.nativeElement.focus();}

        if (n === 4 && this.empty){
        this.Init.nativeElement.focus();} else{this.SeePasses.nativeElement.focus();}
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
        }
}

