import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DbService} from '../../db.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    fileSerch = {
        search_dependence_number : "",
        search_number : "",
        search_final_number : "",
        search_initiator : "",
        search_concept : "",
        search_group : "",
        search_status : 1,
        page : 1,
        totPage : 0,
        perPage: 25
    };
    ctdExp : any;

    constructor( private DB : DbService ) {
        this.sliders.push(
            {
                imagePath: 'assets/images/logo ministerio.jpg',
                label: 'First slide label',
                text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            // {
            //     imagePath: 'assets/images/slider2.jpg',
            //     label: 'Second slide label',
            //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            // },
            // {
            //     imagePath: 'assets/images/slider3.jpg',
            //     label: 'Third slide label',
            //     text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            // }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {
        localStorage.setItem('route', "/dashboard");
        this.DB.search(this.fileSerch).subscribe(

       data => {
                this.ctdExp = data;
            });
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
