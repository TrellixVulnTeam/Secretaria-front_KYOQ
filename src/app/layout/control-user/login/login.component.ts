import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { DbService } from "../../../db.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    user={
        email : '',
        password:'',
    }

    public alerts: Array<any> = [];


    constructor(public router: Router, private DB: DbService) {
    }

    ngOnInit() {

        for (let index = 0; index < this.alerts.length; index++) {
            this.alerts.splice(index);
        }
        this.alerts = this.DB.alerts;
    }

    onLoggedin() {

        var userLog;

        this.DB.login(this.user).subscribe(
            data => {
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('token_type', data.token_type);

            this.DB.user(data.token_type, data.access_token).subscribe( dataUser => {
                userLog = dataUser;
                localStorage.setItem('name', userLog.name);
                localStorage.setItem('email', userLog.email);
                localStorage.setItem('role', userLog.role);
                localStorage.setItem('id', userLog.id);
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigate(['/']);
            })
        }
        ,
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
                    this.router.navigate(['/']);
        })


    };

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
