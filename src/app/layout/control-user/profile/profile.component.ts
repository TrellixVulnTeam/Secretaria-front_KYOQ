import { Component, OnInit } from '@angular/core';
import { DbService } from "../../../db.service";
import { Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
    user={
        newId : '',
        newName : '',
        newEmail : '',
        newPhone : '',
        newPassword : ''
        }

    userLogin={
        email : '',
        password:'',
    }


    repeatpassword = '';


    closeResult:any;

    public alerts: Array<any> = [];

    constructor(private DB: DbService, public router: Router, private modalService: NgbModal ){}

  ngOnInit(): void {

    this.user={
        newId : localStorage.getItem("id"),
        newName : localStorage.getItem("name"),
        newEmail : localStorage.getItem("email"),
        newPhone : localStorage.getItem("phone"),
        newPassword : '',
    }

  }

  validation(content){
      if (this.user.newPassword != this.repeatpassword) {

          this.alerts.push(
              {
                  id: 1,
                  type: 'danger',
                  message: "La Contraseña No Coincide"
              });

        }else{
            this.open(content);

        }
  }

  onLoggedin() {

    var userLog;

    this.DB.login(this.userLogin).subscribe(
        data => {
       this.save();
    },
        (error)=> {
            console.error(error);
            var err = error.error.errors;

            for (let index = 0; index < this.alerts.length; index++) {
                this.alerts.splice(index);
            }

            if (error.error.message != undefined){
                this.alerts.push(
                    {
                        id: 1,
                        type: 'danger',
                        message: error.error.message
                    });
                }

            if (err.email != undefined){
                this.alerts.push(
                    {
                        id: 2,
                        type: 'danger',
                        message: err.email[0]
                    });
                }
            if (err.password != undefined){
                this.alerts.push(
                    {
                        id: 3,
                        type: 'danger',
                        message: err.password[0]
                    });
                }
    })


};

  save() {

    var userLog;



        this.DB.userEdit(this.user).subscribe({
          next: data => {
                userLog = data;
                localStorage.setItem('name', userLog.name);
                localStorage.setItem('email', userLog.email);
                localStorage.setItem('phone', userLog.phone);
                localStorage.setItem('id', userLog.id);
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('PEAJ', userLog.PEAJ);
                localStorage.setItem('SCE', userLog.SCE);



                this.alerts.push(
                    {
                        id: 1,
                        type: 'success',
                        message: "Datos actualizados correctamente"
                    });

                this.ngOnInit();

             },
             error: err=>{
                console.log(err);

             }
      })
  }
  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
    }

    //////////////////MODAL/////////////////////
    open(content) {

          this.modalService.open(content, {size: 'sm', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.save();

        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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

}


