import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DbService } from "../../../db.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;

    user={
        name:localStorage.getItem("name"),
        email:localStorage.getItem("email")
    }

    constructor(private translate: TranslateService, public router: Router, private DB: DbService) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this.DB.logout(localStorage.token_type, localStorage.access_token).subscribe({
            next: data => {
                this.DB.alerts.push({
                    id: 1,
                    type: 'success',
                    message: "Sesion cerrada con éxito"
                });
                console.log(data);

            }
        });
        localStorage.clear();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
