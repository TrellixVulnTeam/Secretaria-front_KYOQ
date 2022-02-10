import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { GraphicsService } from "../../graphics.service";

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'],
  animations: [routerTransition()]
})
export class GraphicsComponent implements OnInit {

    pie:any;
    line:any;

    // Pie
    public pieChartLabels: string[] = [];
    public pieChartData: number[] = [];
    public pieChartType: string;


    // lineChart
    public lineChartData: Array<any> = [
        { data: [], label: 'Ingresos Año 2022' },
        { data: [], label: 'Salida Año 2022' },
      //  { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ];
    public lineChartLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre','Noviembre', ' Diciembre'];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean;
    public lineChartType: string;

    constructor( private GS: GraphicsService) {}

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
    ngOnInit() {

     this.lineChartLegend = true;


     this.GS.pie().subscribe({
         next: data=>{

            this.pie = data;
            this.pie.forEach(element => {
                this.pieChartLabels.push(element.name);
               this.pieChartData.push(element.count);
            });
            this.pieChartType = 'pie';

        }

     })
     this.lineChartData[0].data.pop();
     this.GS.line(2022).subscribe({
         next: data=>{
             console.log(data);

            this.line = data;
            this.line.forEach(element => {
                this.lineChartData[0].data.push(element.total)
                this.lineChartData[1].data.push(element.out)
            });
        }
    })

    // this.lineChartData[1].data.pop();
    // this.GS.line(2022).subscribe({
    //     next: data=>{
    //         console.log(data);

    //        this.line = data;
    //        this.line.forEach(element => {
    //            this.lineChartData[1].data.push(element.total)

    //        });
    //    }
//    })

   console.log(this.lineChartData);


     this.lineChartType = 'line';
    }
}
