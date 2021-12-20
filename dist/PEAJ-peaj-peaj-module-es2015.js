(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PEAJ-peaj-peaj-module"],{

/***/ "2HTN":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/PEAJ/peaj/peaj.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-3\">\n    <div class=\"card-header d-flex justify-content-between\">Lista de Expedientes en Secretaría de Educación\n        <button\n            type=\"button\"\n            class=\"btn btn-m btn-danger\"\n            [routerLink]=\"['/dashboard']\">\n            Volver\n        </button>\n    </div>\n\n    <!-- search -->\n    <div>\n      <table class=\"table table-hover table-striped m-0\">\n        <thead>\n            <tr class=\"mx-auto\">\n                <th class=\"small pt-0 pb-0 px-2\" style=\"width: 185px;\">Numero</th>\n                <th class=\"small pt-0 pb-0 px-2\" style=\"width: 250px;\">Iniciador</th>\n                <th class=\"small pt-0 pb-0 px-2\">Referencia</th>\n                <th class=\"small pt-0 pb-0 px-2\" style=\"width: 200px;\">Grupo</th>\n                <th class=\"small pt-0 pb-0 px-2\" style=\"width: 170px;\">en Posesion</th>\n                <th class=\"small pt-0 pb-0 px-2\" style=\"width: 60px;\">In situ</th>\n                <th class=\"small pt-0 pb-0 px-2\" style=\"width: 80px;\"></th>\n\n            </tr>\n        </thead>\n        <!-- <tbody>\n                <td>\n                    <div style=\"display: flex;\">\n                        <input #N1\n                            type=\"text\"\n                            style=\"font-size: small;\"\n                            oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                            maxlength = \"5\"\n                            [(ngModel)]=\"fileSerch.search_dependence_number\"\n                            (ngModelChange) = \"changeFocus(1)\"\n                            class=\"form-control mr-0 p-0 text-center \"\n                            aria-label=\"Sizing example input\"\n                            aria-describedby=\"inputGroup-sizing-sm\"\n                            style=\"height: 22px; width: 50px;\">\n\n                        <div class=\"col-xl-1 text-center p-0 h-25 \">-</div>\n                        <input #N2\n                            type=\"text\"\n                            style=\"font-size: small;\"\n                            oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                            maxlength = \"7\"\n                            [(ngModel)]=\"fileSerch.search_central_number\"\n                            (ngModelChange) = \"changeFocus(2)\"\n                            class=\"form-control mr-1 p-0 text-center \"\n                            aria-label=\"Sizing example input\"\n                            aria-describedby=\"inputGroup-sizing-sm\"\n                            style=\"height: 22px; \">\n\n                        <div class=\"col-1 text-center p-0 h-25 \">-</div>\n                        <input #N3\n                            type=\"text\"\n                            style=\"font-size: small;\"\n                            oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                            maxlength = \"1\"\n                            [(ngModel)]=\"fileSerch.search_final_number\"\n                            (ngModelChange) = \"changeFocus(3)\"\n                            class=\"form-control mr-1 p-0 text-center\"\n                            aria-label=\"Sizing example input\"\n                            aria-describedby=\"inputGroup-sizing-sm\"\n                            style=\"height: 22px; width: 15px;\">\n                    </div>\n                </td>\n                <td>\n                    <input type=\"text\"\n                    style=\"font-size: small;\"\n                        class=\"form-control mr-1 p-0 text-center h-25\"\n                        [(ngModel)]=\"fileSerch.search_initiator\"\n                        aria-label=\"Sizing example input\"\n                        aria-describedby=\"inputGroup-sizing-sm\">\n                </td>\n                <td style=\"width: auto;\">\n                    <input type=\"text\"\n                        style=\"font-size: small;\"\n                        class=\"form-control mr-1 p-0 text-center h-25\"\n                        [(ngModel)]=\"fileSerch.search_concept\"\n                        aria-label=\"Sizing example input\"\n                        aria-describedby=\"inputGroup-sizing-sm\">\n                    </td>\n\n                <td>\n                    <select class=\"form-control mr-1 p-0 text-center h-25\"\n                    style=\"font-size: small;\"\n                    [(ngModel)]=\"fileSerch.search_agrupation_id\"\n                        aria-label=\"Sizing example input\"\n                        aria-describedby=\"inputGroup-sizing-sm\">\n                        <option> </option>\n                        <option *ngFor=\"let Agrupation of agrupations\" [value]=\"Agrupation.id\">\n                            {{Agrupation.name}}\n                          </option>\n                    </select>\n                </td>\n                <td>\n                    <select class=\"form-control mr-1 p-0 text-center h-25\"\n                    style=\"font-size: small;\"\n                    [(ngModel)]=\"fileSerch.search_site_id\"\n                        aria-label=\"Sizing example input\"\n                        aria-describedby=\"inputGroup-sizing-sm\">\n                        <option> </option>\n                        <option *ngFor=\"let User of users\" [value]=\"User.id\">\n                            {{User.name}}\n                          </option>\n                    </select>\n                </td>\n                <td style=\"display: flex; justify-content: center;\">\n                    <input type=\"checkbox\"  [(ngModel)]=\"fileSerch.search_status\"  >\n                </td>\n\n                <td>\n                    <button #BSearch\n                        class=\"btn btn-outline-info small pt-0 pb-0 px-2\"\n                        type=\"button\"\n                        (click)=\"search()\"\n\n                        [routerLink]=\"\" >\n                        buscar\n                    </button>\n                </td>\n        </tbody> -->\n      </table>\n    </div>\n    <!-- end search -->\n\n    <p *ngFor=\"let alert of alerts\" class=\"small\">\n        <ngb-alert class=\"m-0\" (close)=\"closeAlert(alert)\" [type]=\"alert.type\">{{alert.message}}</ngb-alert>\n    </p>\n    <div class=\"card-body table-responsive p-0\">\n        <table class=\"table table-hover table-striped\">\n            <thead>\n                <tr class=\"mx-auto\">\n                    <th class=\"small pt-0 pb-0 px-2\" style=\"width: 20px;\">Eje</th>\n                    <th class=\"small pt-0 pb-0 px-2\" style=\"width: 130px;\">Sub Eje</th>\n                    <th class=\"small pt-0 pb-0 px-2\" style=\"width: 200px;\">Linea</th>\n                    <th class=\"small pt-0 pb-0 px-2\">Area responsable</th>\n                    <th class=\"small pt-0 pb-0 px-2\"style=\"width: 130px;\">Programa Presupuestario</th>\n                    <th class=\"small pt-0 pb-0 px-2\" style=\"width: 100px;\">Rubro a Financiar</th>\n                    <th class=\"small pt-0 pb-0 px-2\" style=\"width: 60px;\">Meta</th>\n                    <th class=\"small pt-0 pb-0 px-2\" style=\"width:45px;\">\n                        <button\n                        class=\"btn btn-outline-primary small pt-0 pb-0 px-2 m-1\"\n                        type=\"button\"\n                        style=\"width: 95%;\"\n                        [routerLink]=\"['/createExp']\" >\n                        Agregar\n                        </button>\n                     </th>\n                </tr>\n            </thead>\n            <!-- <tbody *ngFor=\"let file of files.data; let i = index \" >\n                <tr     >\n                        <td class=\"small pt-0 pb-0 px-2\" > {{files.from + i}} </td>\n                        <td class=\"small pt-0 pb-0 px-2\" > {{file.dependence_number}}-{{file.central_number}}-{{file.final_number}} </td>\n                        <td class=\"small pt-0 pb-0 px-2\" > {{file.initiator}} </td>\n                        <td class=\"small pt-0 pb-0 px-2\"> {{file.concept}} </td>\n                       <td *ngIf=\"editing == file.id; else elseBlock\">\n                            <select class=\"form-control mr-1 p-0 text-center h-25 small\"\n                            [(ngModel)]=\"fileSerch.search_agrupation_id\"\n                                aria-label=\"Sizing example input\"\n                                aria-describedby=\"inputGroup-sizing-sm\">\n                                <option class=\"small\" *ngFor=\"let agrupation of agrupations\" [value]=\"agrupation.id\">\n                                    {{agrupation.name}}\n                                  </option>\n                            </select>\n                        </td>\n\n                        <ng-template #elseBlock>\n                            <td class=\"small pt-0 pb-0 px-2 \">\n                                {{file.agrupation.name}}\n                            </td>\n                        </ng-template>\n                        <td class=\"small pt-0 pb-0 px-2\" *ngIf = \"file.status; else elseClose\" >{{file.site.name}}</td>\n                        <ng-template #elseClose>\n                            <td class=\"small pt-0 pb-0 px-2\" >{{'CERRADO'}}</td>\n                        </ng-template>\n                        <td >\n                            <div style=\"display: flex; justify-content: center;\"  >\n                                <input type=\"checkbox\"  [(ngModel)]=\"file.status\" disabled  >\n                            </div>\n                        </td>\n\n                        <td class=\"d-flex justify-content-center\">\n                            <button\n                            class=\"btn btn-outline-primary small pt-0 pb-0 px-2 \"\n                            type=\"button\"\n                            (click)=\"edit_file(file.id)\"\n                            *ngIf=\"editing != file.id; else elseBlockButton\">\n                            Edit\n                        </button>\n                        <ng-template #elseBlockButton>\n                            <button\n                        class=\"btn btn-outline-primary small pt-0 pb-0 px-2 \"\n                        type=\"button\"\n                        (click)=\"save_file(file.id)\">\n                        Guardar\n                      </button>\n                    </ng-template>\n\n                        <button\n                        class=\"btn btn-outline-success small pt-0 pb-0 px-2 ml-2\"\n                        type=\"button\"\n                        (click)=\"see_passe(file.id)\"\n                        [routerLink]=\"['/passes']\"\n                        *ngIf=\"editing != file.id; else elseBlockButtonCancel\">\n                        Ver\n                        </button>\n                        <ng-template #elseBlockButtonCancel>\n                            <button\n                        class=\"btn btn-outline-danger small pt-0 pb-0 px-2 \"\n                        type=\"button\"\n                        (click)=\"cancel_update()\">\n                        cancelar\n                      </button>\n                    </ng-template>\n                    </td>\n                </tr>\n            </tbody> -->\n        </table>\n\n<!-- pagination -->\n<nav aria-label=\"Page navigation example\" class=\"d-flex justify-content-center \">\n    <ul class=\"pagination\" *ngFor = \" let item of files.links; let i = index\">\n\n        <div *ngIf=\"item.active; else noActive\">\n            <li class=\"page-item active\"  >\n                <a class=\"page-link p-0 pl-1 pr-1 active\" style=\"margin: 1px;\" [innerHTML]= item.label></a>\n            </li>\n        </div>\n        <ng-template #noActive >\n\n\n            <ng-container *ngIf=\"(files.current_page === files.last_page && i == files.last_page +1) || (files.current_page === 1 && i ==0)    ; else elseTemplate\">\n                <li class=\"page-item disabled\">\n                    <p class=\"page-link p-0 pl-1 pr-1 \" style=\"margin: 1px;\" [innerHTML]= item.label></p>\n                </li>\n            </ng-container>\n            <ng-template #elseTemplate>\n                <li class=\"page-item\"  >\n                    <p class=\"page-link p-0 pl-1 pr-1 \" style=\"margin: 1px;\"  (click)=\"goToUrl(item.url)\" [innerHTML]= item.label></p>\n                </li>\n            </ng-template>\n\n        </ng-template>\n    </ul>\n</nav>\n<!-- pagination end -->\n</div>\n\n");

/***/ }),

/***/ "7Vvu":
/*!*************************************************!*\
  !*** ./src/app/layout/PEAJ/peaj/peaj.module.ts ***!
  \*************************************************/
/*! exports provided: PeajModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeajModule", function() { return PeajModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "M0ag");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _peaj_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./peaj-routing.module */ "H7lf");
/* harmony import */ var _peaj_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./peaj.component */ "xUFQ");








let PeajModule = class PeajModule {
};
PeajModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _peaj_routing_module__WEBPACK_IMPORTED_MODULE_6__["PeajRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
        declarations: [_peaj_component__WEBPACK_IMPORTED_MODULE_7__["PeajComponent"]]
    })
], PeajModule);



/***/ }),

/***/ "H7lf":
/*!*********************************************************!*\
  !*** ./src/app/layout/PEAJ/peaj/peaj-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PeajRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeajRoutingModule", function() { return PeajRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _peaj_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./peaj.component */ "xUFQ");




const routes = [
    {
        path: '',
        component: _peaj_component__WEBPACK_IMPORTED_MODULE_3__["PeajComponent"]
    }
];
let PeajRoutingModule = class PeajRoutingModule {
};
PeajRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PeajRoutingModule);



/***/ }),

/***/ "iy2W":
/*!*****************************************************!*\
  !*** ./src/app/layout/PEAJ/peaj/peaj.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWFqLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "xUFQ":
/*!****************************************************!*\
  !*** ./src/app/layout/PEAJ/peaj/peaj.component.ts ***!
  \****************************************************/
/*! exports provided: PeajComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeajComponent", function() { return PeajComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_peaj_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./peaj.component.html */ "2HTN");
/* harmony import */ var _peaj_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./peaj.component.css */ "iy2W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PeajComponent = class PeajComponent {
    constructor() { }
    ngOnInit() {
    }
};
PeajComponent.ctorParameters = () => [];
PeajComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-peaj',
        template: _raw_loader_peaj_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_peaj_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PeajComponent);



/***/ })

}]);
//# sourceMappingURL=PEAJ-peaj-peaj-module-es2015.js.map