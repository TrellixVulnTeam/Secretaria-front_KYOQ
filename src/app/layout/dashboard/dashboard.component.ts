import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DbService} from '../../db.service';
import { DataService} from '../../data.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    total_file : any;
    agrupations:any;
    constructor( private DB : DbService, private DATA : DataService) {


        this.sliders.push(
            {
                imagePath: 'assets/images/logo ministerio-new.jpg',
                label: 'First slide label',
                text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                 imagePath: 'assets/images/logo SCE.jpg',
                 label: 'Second slide label',
                 text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
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
                        this.DB.Agrupations_list().subscribe({
                            next: data =>{
                                this.DATA.Agrupations = data;
                                this.agrupations = this.DATA.Agrupations;
                            },

                            error: err =>{
                                console.log(err);

                            }
                        });


                        this.DB.file_total().subscribe({
                            next: data =>{
                                this.total_file = data;
                                console.log(data);

                            },
                            error: err =>{
                                console.log(err);

                            }
                        })
                    }

                    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
