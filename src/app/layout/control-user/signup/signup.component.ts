import { Component, HostListener, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { DbService } from "../../../db.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    user={
        name : '',
        email : '',
        password : '',
    }
    repeatpassword = '';


    public alerts: Array<any> = [];

    @HostListener('window:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
        case 'Enter':
            this.signup();
            break;

        case "Escape":
           this.router.navigate(['/login']);


            break;

        default:
            break;
    }
}


    constructor(private DB: DbService, public router: Router ) {


        }

    signup() {
            this.DB.signup(this.user).subscribe({
                next: data => {
                    console.log(data);
                    this.DB.alerts.push({
                        id: 1,
                        type: 'success',
                        message: data.message
                    });
                    this.router.navigate(['/']);
              },
              error: error => {
                  var err = error.error.errors;

                  for (let index = 0; index < this.alerts.length; index++) {
                      this.alerts.splice(index);
                  }

                  if (err.name != undefined){

                    this.alerts.push(
                        {
                            id: 1,
                            type: 'danger',
                            message: err.name[0]
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

                  if (this.user.password != this.repeatpassword){
                    this.alerts.push(
                        {
                            id: 4,
                            type: 'danger',
                            message: 'La contraseña debe coincidir'
                        });
                    }

                    console.log(this.alerts);}
              })
    }
    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
