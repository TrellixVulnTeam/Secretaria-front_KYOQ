(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["graphics-graphics-module"],{

/***/ "G/b+":
/*!*******************************************************!*\
  !*** ./src/app/layout/graphics/graphics.component.ts ***!
  \*******************************************************/
/*! exports provided: GraphicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicsComponent", function() { return GraphicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_graphics_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./graphics.component.html */ "jtKP");
/* harmony import */ var _graphics_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphics.component.css */ "GvMV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../router.animations */ "ZZ88");
/* harmony import */ var _graphics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../graphics.service */ "poTf");






let GraphicsComponent = class GraphicsComponent {
    constructor(GS) {
        this.GS = GS;
        // Pie
        this.pieChartLabels = [];
        this.pieChartData = [];
        // lineChart
        this.lineChartData = [
            { data: [], label: 'Año 2021' },
        ];
        this.lineChartLabels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', ' Diciembre'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
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
    }
    // events
    chartClicked(e) {
        // console.log(e);
    }
    chartHovered(e) {
        // console.log(e);
    }
    ngOnInit() {
        this.lineChartLegend = true;
        this.GS.pie().subscribe({
            next: data => {
                this.pie = data;
                this.pie.forEach(element => {
                    this.pieChartLabels.push(element.name);
                    this.pieChartData.push(element.count);
                });
                this.pieChartType = 'pie';
            }
        });
        this.lineChartData[0].data.pop();
        this.GS.line().subscribe({
            next: data => {
                this.line = data;
                this.line.forEach(element => {
                    this.lineChartData[0].data.push(element.total);
                });
                console.log(this.lineChartData);
            }
        });
        this.lineChartType = 'line';
    }
};
GraphicsComponent.ctorParameters = () => [
    { type: _graphics_service__WEBPACK_IMPORTED_MODULE_5__["GraphicsService"] }
];
GraphicsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-graphics',
        template: _raw_loader_graphics_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()],
        styles: [_graphics_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_graphics_service__WEBPACK_IMPORTED_MODULE_5__["GraphicsService"]])
], GraphicsComponent);



/***/ }),

/***/ "GvMV":
/*!********************************************************!*\
  !*** ./src/app/layout/graphics/graphics.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFwaGljcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "KjeO":
/*!****************************************************!*\
  !*** ./src/app/layout/graphics/graphics.module.ts ***!
  \****************************************************/
/*! exports provided: GraphicsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicsModule", function() { return GraphicsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "M0ag");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _graphics_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graphics-routing.module */ "ubup");
/* harmony import */ var _graphics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./graphics.component */ "G/b+");









let GraphicsModule = class GraphicsModule {
};
GraphicsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _graphics_routing_module__WEBPACK_IMPORTED_MODULE_7__["graphicsRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"]],
        declarations: [_graphics_component__WEBPACK_IMPORTED_MODULE_8__["GraphicsComponent"]]
    })
], GraphicsModule);



/***/ }),

/***/ "jtKP":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/graphics/graphics.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\n    <app-page-header [heading]=\"'Graficos'\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                   Representación Por Tema\n                </div>\n                <div class=\"card-body\">\n                    <canvas\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartHover)=\"chartHovered($event)\"\n                        [chartType]=\"pieChartType\"\n                        [data]=\"pieChartData\"\n                        [labels]=\"pieChartLabels\"\n                        baseChart\n                        height=\"150px\"\n                    >\n                    </canvas>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                    <div class=\"card-header\">\n                       Ingresos\n                    </div>\n                    <div class=\"card-body\">\n                        <canvas\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartHover)=\"chartHovered($event)\"\n                        [chartType]=\"lineChartType\"\n                        [colors]=\"lineChartColors\"\n                        [datasets]=\"lineChartData\"\n                        [labels]=\"lineChartLabels\"\n                        [legend]=\"lineChartLegend\"\n                        [options]=\"lineChartOptions\"\n                        baseChart\n                        height=\"130\"\n                    >\n                    </canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n\n    <!-- <div class=\"row\">\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Bar Chart\n                </div>\n                <div class=\"card-body\">\n                    <canvas\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartHover)=\"chartHovered($event)\"\n                        [chartType]=\"barChartType\"\n                        [datasets]=\"barChartData\"\n                        [labels]=\"barChartLabels\"\n                        [legend]=\"barChartLegend\"\n                        [options]=\"barChartOptions\"\n                        baseChart\n                    >\n                    </canvas>\n                </div>\n                <div class=\"card-footer\">\n                    <button (click)=\"randomize()\" class=\"btn btn-info btn-sm\">Update</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Doughnut Chart\n                </div>\n                <div class=\"card-body\">\n                    <canvas\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartHover)=\"chartHovered($event)\"\n                        [chartType]=\"doughnutChartType\"\n                        [data]=\"doughnutChartData\"\n                        [labels]=\"doughnutChartLabels\"\n                        baseChart\n                        height=\"180px\"\n                    >\n                    </canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Radar Chart\n                </div>\n                <div class=\"card-body\">\n                    <canvas\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartHover)=\"chartHovered($event)\"\n                        [chartType]=\"radarChartType\"\n                        [datasets]=\"radarChartData\"\n                        [labels]=\"radarChartLabels\"\n                        baseChart\n                        height=\"150px\"\n                    >\n                    </canvas>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Pie Chart\n                </div>\n                <div class=\"card-body\">\n                    <canvas\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartHover)=\"chartHovered($event)\"\n                        [chartType]=\"pieChartType\"\n                        [data]=\"pieChartData\"\n                        [labels]=\"pieChartLabels\"\n                        baseChart\n                        height=\"150px\"\n                    >\n                    </canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Polar Area Chart\n                </div>\n                <div class=\"card-body\">\n                    <canvas\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartHover)=\"chartHovered($event)\"\n                        [chartType]=\"polarAreaChartType\"\n                        [data]=\"polarAreaChartData\"\n                        [labels]=\"polarAreaChartLabels\"\n                        [legend]=\"polarAreaLegend\"\n                        baseChart\n                        height=\"130px\"\n                    >\n                    </canvas>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Line Chart\n                </div>\n                <div class=\"card-body\">\n                    <canvas\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartHover)=\"chartHovered($event)\"\n                        [chartType]=\"lineChartType\"\n                        [colors]=\"lineChartColors\"\n                        [datasets]=\"lineChartData\"\n                        [labels]=\"lineChartLabels\"\n                        [legend]=\"lineChartLegend\"\n                        [options]=\"lineChartOptions\"\n                        baseChart\n                        height=\"130\"\n                    >\n                    </canvas>\n                </div>\n            </div>\n        </div>\n    </div> -->\n</div>\n");

/***/ }),

/***/ "poTf":
/*!*************************************!*\
  !*** ./src/app/graphics.service.ts ***!
  \*************************************/
/*! exports provided: GraphicsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicsService", function() { return GraphicsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let GraphicsService = class GraphicsService {
    constructor(http) {
        this.http = http;
        this.alerts = [];
        this.url = "http://localhost:8000/api/graphics";
    }
    pie() {
        return this.http.get(this.url + '/pie');
    }
    line() {
        return this.http.get(this.url + '/line');
    }
};
GraphicsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GraphicsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GraphicsService);



/***/ }),

/***/ "ubup":
/*!************************************************************!*\
  !*** ./src/app/layout/graphics/graphics-routing.module.ts ***!
  \************************************************************/
/*! exports provided: graphicsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphicsRoutingModule", function() { return graphicsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _graphics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphics.component */ "G/b+");




const routes = [
    {
        path: '',
        component: _graphics_component__WEBPACK_IMPORTED_MODULE_3__["GraphicsComponent"],
        children: []
    }
];
let graphicsRoutingModule = class graphicsRoutingModule {
};
graphicsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], graphicsRoutingModule);



/***/ })

}]);
//# sourceMappingURL=graphics-graphics-module-es2015.js.map