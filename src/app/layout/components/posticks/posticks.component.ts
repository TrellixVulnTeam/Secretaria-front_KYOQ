import { ViewChild, Component, OnInit, ElementRef, HostListener} from '@angular/core';
import { DbService } from "../../../db.service";

@Component({
    selector: 'app-posticks',
    templateUrl: './posticks.component.html',
    styleUrls: ['./posticks.component.scss']
})
export class PosticksComponent implements OnInit {

    Colapse:boolean;
    totalPostIt: string;
    PostIts:any;
    users:any
    to_share:boolean;
    to_share_id:-1;
    adding:boolean;


    addUser=[];

    newPostIt = {
        text: "",
        user_id: localStorage.getItem("id")
    }

    @ViewChild('N1') N1:ElementRef;


    constructor( private DB: DbService ) {
        this.adding = false;
        this.Colapse = true;

    }


    ngOnInit() {
        this.actualizacion(30000);

         this.to_share = false;

         this.DB.userList().subscribe({
             next:  data =>{
                 this.users=data;
             }});

        this.DB.PostItList().subscribe({
            next:  data =>{
                this.PostIts = data;
                   if(this.PostIts.total<10){this.totalPostIt = "0"+ this.PostIts.total}
                   else{this.totalPostIt = this.PostIts.total}


                   this.PostIts.data.forEach(element => {
                    var aux = this.users.find(x => x.id == element.post_it.user_id);
                    element.post_it.user = aux;
                   });


               }});
     }

     chageEstate(){
        if (this.Colapse) {
            this.Colapse = false;
        } else {
            this.Colapse = true;
        }
        console.log(this.PostIts);
 this.ngOnInit();
     }

     echo(Post_it){


        if (Post_it.echo == 0) {
            Post_it.echo = 1;
        } else {
            Post_it.echo = 0;
        }


        this.DB.PostItEdit(Post_it).subscribe({
            next:
            data =>{
                    console.log(data);
                    this.ngOnInit();
            },
            error:
                err => {
                    console.error('algo salio mal: ' + err.message);

                }
        })
         console.log(Post_it);
    }

    Adding(){

        if (this.adding == false){this.adding = true;
            console.log(this.N1.nativeElement);
            this.N1.nativeElement.focus();}
    }

    deletePostIt(id){

        this.DB.PostITDetroy(id).subscribe({
            next:
            data =>{
                    console.log(data);
                    this.ngOnInit();

            },
            error:
                err => {
                    console.error('algo salio mal: ' + err.message);

                }
        })

    }

    createPostIt(){
        this.DB.PostItCreate(this.newPostIt).subscribe({
            next:
                data=>{
                    console.log(data);
                    this.adding = false;
                    this.newPostIt.text = "";
                    this.ngOnInit();
                }
        })
    }
    cancelAdding(){
        this.adding = false;
    }

    To_Share(id){
        if(this.to_share ==true){this.to_share=false;
        }else{
            this.to_share=true
            this.to_share_id = id;
        }
    }

    changeCheckBox(id){

        let aux = this.addUser.find(x => id)

        if (aux === id) {
            this.addUser.pop();
        }else{
            this.addUser.push(id);
        }


        console.log(this.addUser);

    }

    save(id){
        var aux={
            id: id,
            shared_ids :  this.addUser
        }


        this.DB.PostItShare(aux).subscribe({
            next:
                data =>{
                    console.log(data);

                }
        })

        this.ngOnInit();


    }

    actualizacion(ms){

        if (this.to_share) {
            window.setInterval(
                () => this.DB.PostItList().subscribe({
                    next:  data =>{
                        this.PostIts = data;
                        if(this.PostIts.total<10){this.totalPostIt = "0"+ this.PostIts.total}
                        else{this.totalPostIt = this.PostIts.total}

                        this.PostIts.data.forEach(element => {
                            var aux = this.users.find(x => x.id == element.post_it.user_id);
                            element.post_it.user = aux;
                            });

                            console.log(data);


                    }
                })
            , ms);
            }
    }
}


