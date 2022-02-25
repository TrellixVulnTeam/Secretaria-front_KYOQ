import { ViewChild, Component, OnInit, ElementRef, HostListener, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
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
    users:any;

    editing: null;

    fileSerch = {
        search_dependence_number : "",
        search_central_number : "",
        search_final_number : "",
        search_initiator : "",
        search_concept : "",
        search_agrupation_id : "",
        search_status : "1",
        search_site_id : localStorage.getItem("id"),
        perPage: 10
    };

    public alerts: Array<any> = [];


    @ViewChild('N1') N1:ElementRef;
    @ViewChild('N2') N2:ElementRef;
    @ViewChild('N3') N3:ElementRef;
    @ViewChild('BSearch') BSearch:ElementRef;

    @HostListener('window:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
        case 'Enter':
            this.search();
            break;

        case "Escape":
            this.router.navigate(['/dashboard']);


            break;

        default:
            break;
    }

  }

    constructor(private DB: DbService, private DATA: DataService, private router: Router) {

        this.alerts = this.DB.alerts;

    }




    ngOnInit(): void {
            this.DB.File_search(this.fileSerch).subscribe({
                next:
                     data =>{
                         this.files = data;
                         console.log(data);

                        }});

            this.DB.Agrupations_list().subscribe({
                next:
                    data =>{
                        this.agrupations = data;
                    }});


            this.DB.userList().subscribe({
                next: data=>{
                    this.users = data;
                }
            })
            this.fileSerch.search_site_id = "";
    }

    ngAfterViewInit() {
        this.N1.nativeElement.focus();
      }


////////////////////modification files//////////////////////////////


    public edit_file(id_file){

        this.editing = id_file;

        const aux = this.files.data.filter(x => x.id === id_file);
        this.fileSerch.search_agrupation_id = aux[0].agrupation_id;
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

         this.DB.File_update(data).subscribe({
             next:
                 data =>{
                    this.DB.alerts.push({
                        id: 1,
                        type: 'success',
                        message: "Expediente Modificado"
                    })
                    this.ngOnInit();
                },
                    error:
                        err =>{
                            this.DB.alerts.push({
                                id: 1,
                                type: 'danger',
                                message: err
                        });

                    }});
                    this.fileSerch.search_agrupation_id = "";
                    this.editing = null;
    }

////////////////////seach file//////////////////////////////

    public search(){

        if(this.fileSerch.search_status ){
            this.fileSerch.search_status = "1"
        }else{this.fileSerch.search_status = "0"}

       if(this.fileSerch!= null){

            this.DB.File_search(this.fileSerch).subscribe({
                next:
                data =>{
                    this.files = data;
                }});
            }

    }

////////////////////see_passe////////////////////////////////
    public see_passe(id_file){
        this.DATA.file = this.files.data.filter(x => x.id == id_file);
        this.router.navigate(['/passes']);

    }

////////////////////paginations//////////////////////////////

    public goToUrl(url:any){

        const data = {
            search_site_id: this.fileSerch.search_site_id,
            search_status: this.fileSerch.search_status

        }
        this.DB.GoToUrlFile(url, data).subscribe({
            next:
                 data =>{
                     this.files = data;
                    }});

    }

////////////////////alerts//////////////////////////////

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    public changeFocus(n){

        if (n === 1 && this.fileSerch.search_dependence_number.length === 5){
            this.N2.nativeElement.focus();}

        if (n === 2 && this.fileSerch.search_central_number.length === 7){
            this.N3.nativeElement.focus();}

        if (n === 3 && this.fileSerch.search_final_number.length === 1){
            this.BSearch.nativeElement.focus();}

    }
}
