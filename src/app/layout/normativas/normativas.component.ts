import { Component, OnInit, ViewChild, ElementRef, HostListener, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { DbService } from '../../db.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ArrayType } from '@angular/compiler';
import { type } from 'os';

@Component({
  selector: 'app-normativas',
  templateUrl: './normativas.component.html',
  styleUrls: ['./normativas.component.css']
})
export class NormativasComponent implements OnInit {

    normativas:any;
    types:any;
    agrupations:any;
    alerts:any;
    closeResult = '';

    inModal:boolean = false;

    normativa_search = {
        type: "",
        number: "",
        year:"",
        reference: "",
        agrupation:"",
        order_by:"type_id",
        order:"asc"
    }

    new_normativa = {
        name:"",
        type: "",
        number: "",
        year:"",
        reference: "",
        agrupation:"",
        file: "",
    }

    @HostListener('window:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
        case 'Enter':
            if(this.inModal){this.search_normativa()}
            else {this.onSubmit()}
            break;

        case "Escape":
            if(this.inModal){this.router.navigate(['/dashboard'])}
            else{this.modalService.dismissAll('Cross click')}


            break;

        default:
            break;
    }
 }
    constructor(private DB: DbService, private DATA: DataService, private router: Router, private modalService: NgbModal ) {

        this.alerts = this.DB.alerts;

    }


  ngOnInit(): void {


    this.search_normativa();

    this.DB.Normativas_agrupations_list().subscribe({
        next:
            data=>{
                this.agrupations = data;
                console.log(data);

             }
    })


    this.DB.Normativas_types_list().subscribe({
        next:
            data=>{
                this.types = data;
             }
    })

  }

  public search_normativa() {

     this.normativas = this.DB.Normativas_search(this.normativa_search).subscribe({
         next:
              data => {
             this.normativas = data;

             }
     })
  }
  public export(name){
      this.DB.Normativas_export(name);
  }
  public see(name){

    this.DB.Normativas_see(name);
  }
  public goToUrl(url:any){

    this.DB.GoToUrlFile(url, this.normativa_search).subscribe({
        next:
             data =>{
                this.normativas = data;
                console.log(this.normativas);

               }});
  }
  public invert_order(){
        var elemento = document.getElementById("arrow");

        if(this.normativa_search.order === "asc"){
            this.normativa_search.order = "desc";
            elemento.classList.remove('rotate180');

        }
        else {
            this.normativa_search.order= "asc";
            elemento.classList.add('rotate180');
        }

  }
  public create(){
  }

    //////////////////MODAL/////////////////////
    open(content) {
        this.modalService.open(content, {size: 's', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          this. new_normativa = {
                name:"",
                type: "",
                number: "",
                year:"",
                reference: "",
                agrupation:"",
                file: "",
            };
        });
      }


      private getDismissReason(reason: any): string {

        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return `with: ${reason}`;
        }
      }


      //////////////////////////////////////////////////////

      public filesToUpload: string | ArrayBuffer;



        seleccionarArchivo(event){
            var files=event.target.files;
            var file=files[0];

            if(file && files)    {
              var reader = new FileReader();
              reader.onload=this._handleReaderLoader.bind(this);
              reader.readAsBinaryString(file);
            }
           }
           _handleReaderLoader(readerEvent){
              var binaryString=readerEvent.target.result;
              this.new_normativa.file=btoa(binaryString);
           }



    onSubmit(){

        var tipo = this.types.find(x => x.id == this.new_normativa.type);

        this.new_normativa.name= tipo.name + " "+this.new_normativa.number +"-"+this.new_normativa.year+".pdf";


       this.DB.Nomativas_create(this.new_normativa).subscribe({
           next: data =>{
               console.log(data);
               this.ngOnInit();

           }
       })
       this.modalService.dismissAll();


    }
    }
