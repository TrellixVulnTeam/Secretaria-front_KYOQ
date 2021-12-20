(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["internal-passe-passe-passe-module"],{

/***/ "D0U/":
/*!*****************************************************************!*\
  !*** ./src/app/layout/internal-passe/passe/passe.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".resaltado {\n    font-size: larger;\n    font-weight: 900;\n    padding-right: 6px;\n    padding-left: 6px;\n}\n\n.centrado {\n    padding-top: 2px;\n\n}\n\n.peke {\n    font-size: small;\n    padding-right: 6px;\n    padding-left: 6px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3NlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoicGFzc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNhbHRhZG8ge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xufVxuXG4uY2VudHJhZG8ge1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG5cbn1cblxuLnBla2Uge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xufVxuIl19 */");

/***/ }),

/***/ "EzXm":
/*!****************************************************************!*\
  !*** ./src/app/layout/internal-passe/passe/passe.component.ts ***!
  \****************************************************************/
/*! exports provided: PasseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasseComponent", function() { return PasseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_passe_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./passe.component.html */ "mhH2");
/* harmony import */ var _passe_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passe.component.css */ "D0U/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../db.service */ "nA5i");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








let PasseComponent = class PasseComponent {
    constructor(DB, router, DATA) {
        this.DB = DB;
        this.router = router;
        this.DATA = DATA;
        this.newInternalPasse = {
            id: "",
            from: 0,
            from_date: "",
            responsable: "",
            response: "",
            to: 0,
            to_date: "",
            status: "",
            external_passe: "",
            file_id: 0
        };
        this.totPage = [];
        this.currentPage = 0;
        this.alerts = [];
        this.alerts = this.DB.alerts;
    }
    ngOnInit() {
        this.file = this.DATA.file;
        this.newInternalPasse.file_id = this.file[0].id;
        this.fileClose = this.file[0].status;
        this.external_passe_id = this.DATA.External_passe_edit_id;
        this.DB.internal_passe_search(this.external_passe_id).subscribe({
            next: data => {
                this.internal_passes = data;
                this.external_passe = this.internal_passes.data[0].external_passe;
                this.newInternalPasse.response = this.internal_passes.data[0].response;
            }
        });
        this.DB.Offices_list().subscribe({
            next: data => {
                this.aux = data;
                this.offices = this.aux.data;
                this.external_passe_from = this.offices.filter(x => x.id == this.external_passe.from);
            }
        });
        this.DB.userList().subscribe({
            next: data => {
                this.users = data;
            }
        });
        this.today = new Date();
        this.newInternalPasse.to_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(this.today, 'dd-MM-yyyy HH:mm:ss', 'es-AR');
        this.currentPage = 1;
    }
    internal_passe_create() {
        this.newInternalPasse.from = Number(localStorage.getItem("id"));
        this.newInternalPasse.external_passe = this.external_passe_id;
        this.newInternalPasse.from_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(this.today, 'dd-MM-yyy HH:mm:ss', 'es-AR');
        this.newInternalPasse.status = "0";
        this.newInternalPasse.to_date = null;
        console.log(this.newInternalPasse);
        this.DB.internal_passe_create(this.newInternalPasse).subscribe({
            next: data => {
                console.log(data);
                this.ngOnInit();
            }
        });
    }
    internal_passe_update(id) {
        this.newInternalPasse.responsable = localStorage.getItem("id");
        this.newInternalPasse.status = "1";
        this.newInternalPasse.to_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(this.today, 'yyyy-MM-dd HH:mm:ss', 'en-US');
        this.newInternalPasse.external_passe = this.external_passe_id;
        this.newInternalPasse.id = id;
        this.DB.internal_passe_update(this.newInternalPasse).subscribe({
            next: data => {
                this.newInternalPasse.from = this.newInternalPasse.to;
                this.newInternalPasse.from_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(this.today, 'yyyy-MM-dd HH:mm:ss', 'en-US');
                this.newInternalPasse.status = "0";
                this.newInternalPasse.to = null;
                this.newInternalPasse.to_date = null;
                console.log(this.newInternalPasse);
                this.DB.internal_passe_create(this.newInternalPasse).subscribe({
                    next: data => {
                        this.ngOnInit();
                    }
                });
                this.ngOnInit();
            }
        });
    }
    goToUrl(url) {
        this.DB.GoToUrl(url).subscribe({
            next: data => {
                this.internal_passes = data;
                console.log(this.internal_passes);
            }
        });
    }
    closeAlert(alert) {
        const index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
};
PasseComponent.ctorParameters = () => [
    { type: _db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
PasseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-passe',
        template: _raw_loader_passe_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_passe_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
], PasseComponent);



/***/ }),

/***/ "PAma":
/*!*********************************************************************!*\
  !*** ./src/app/layout/internal-passe/passe/passe-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PasseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasseRoutingModule", function() { return PasseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _passe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passe.component */ "EzXm");




const routes = [
    {
        path: '',
        component: _passe_component__WEBPACK_IMPORTED_MODULE_3__["PasseComponent"]
    }
];
let PasseRoutingModule = class PasseRoutingModule {
};
PasseRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PasseRoutingModule);



/***/ }),

/***/ "mhH2":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/internal-passe/passe/passe.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-3\">\n    <div class=\"card-header d-flex justify-content-between\">\n        <div class=\"d-flex\"> Expediente N°\n            <div class=\"ml-2\" style=\"font-weight: 900;\"> {{file[0].dependence_number}}-{{file[0].central_number}}-{{file[0].final_number}} </div>\n        </div>\n        <button\n            type=\"button\" class=\"btn btn-m btn-danger\"\n            [routerLink]=\"['/passes']\" >\n            Volver\n        </button>\n    </div>\n\n<div> <!--inicio datos ep-->\n\n<!-- //////////////////////////////////ALERTS//////////////////////////// -->\n    <p *ngFor=\"let alert of alerts\"class=\"small\">\n        <ngb-alert class=\"m-0\" (close)=\"closeAlert(alert)\" [type]=\"alert.type\">{{alert.message}}</ngb-alert>\n    </p>\n\n\n<!-- //////////////////////////////////TABLET//////////////////////////// -->\n    <table class=\"table table-hover table-striped m-0\">\n        <thead class=\"\">\n            <tr class=\"mx-auto\">\n                <th style=\"width: 300px;\" >Iniciador</th>\n                <th style=\"width: auto;\" >Referencia</th>\n                <th style=\"width: 200px;\" >Grupo</th>\n            </tr>\n        </thead>\n        <tbody>\n                <td style=\"padding: 4px; padding-top: 8px; padding-bottom: 8px;\">\n                    <textarea type=\"text\"\n                        rows=\"2\"\n                        style=\"font-size: small;\"\n                        class=\"form-control mr-1  p-0 text-center\"\n                        [(ngModel)]=\"file[0].initiator\"\n                        aria-label=\"Sizing example input\"\n                        aria-describedby=\"inputGroup-sizing-sm\"\n                        disabled>\n                    </textarea>\n                </td>\n                <td style=\"padding: 4px; padding-top: 8px; padding-bottom: 8px;\">\n                    <textarea type=\"text\"\n                        class=\"form-control mr-1  p-0 text-center\"\n                        style=\"font-size: small;\"\n                        [(ngModel)]=\"file[0].concept\"\n                        aria-label=\"Sizing example input\"\n                        aria-describedby=\"inputGroup-sizing-sm\"\n                        disabled>\n                    </textarea>\n                </td>\n                <td style=\"padding: 4px; padding-top: 8px; padding-bottom: 8px;\">\n                    <textarea type=\"text\"\n                    class=\"form-control mr-1 p-0 text-center\"\n                    style=\"font-size: small;\"\n                    [(ngModel)]=\"file[0].agrupation.name\"\n                    aria-label=\"Sizing example input\"\n                    aria-describedby=\"inputGroup-sizing-sm\"\n                    disabled>\n                    </textarea>\n                </td>\n            </tbody>\n        </table>\n</div>\n\n    <div class=\"card  small\">\n        <div class=\"card-header d-flex justify-content-between p-0\">\n            <div class=\"d-flex\"> <div class=\"centrado\"> Pase desde</div> <div class=\"resaltado\">{{ external_passe_from[0].name }}</div> <div class=\"centrado\"> ingresado el </div> <div class=\"resaltado\">{{ external_passe.from_date | date: 'shortDate'}}</div>\n                <div class=\"ml-2\" style=\"font-weight: 900;\"> {{external_passe_from.id}} </div>\n            </div>\n        </div>\n\n    <div>\n        <div class=\"card-body table-responsive p-0\">\n        <table class=\"table table-hover table-striped\">\n            <thead>\n                <tr class=\"mx-auto\">\n                    <th style=\"width: 3px;\"  class=\"small pt-0 pb-0 px-2 \">N°</th>\n                    <th style=\"width: 80px;\" class=\"small pt-0 pb-0 px-2 \">Desde</th>\n                    <th style=\"width: 80px;\" class=\"small pt-0 pb-0 px-2\">Fecha Ingreso</th>\n                    <th class=\"small pt-0 pb-0 px-2\">Respuesta</th>\n                    <th style=\"width: 100px;\" class=\"small pt-0 pb-0 px-2\">Hacia</th>\n                    <th style=\"width: 80px;\" class=\"small pt-0 pb-0 px-2\">Fecha salida</th>\n                    <th style=\"width: 80px;\" class=\"small pt-0 pb-0 px-2\">Responsable</th>\n                </tr>\n            </thead>\n            <tbody >\n                <tr *ngFor=\"let item of internal_passes.data; let i = index \">\n                    <td class=\"small pt-0 pb-0 px-1 b-0 \" > {{ internal_passes.from + i}} </td>\n                    <td class=\"small pt-0 pb-0 px-1 b-0\" > {{item.from.name}} </td>\n                    <td class=\"small pt-0 pb-0 px-1 b-0\" > {{item.from_date}} </td>\n\n                    <td class=\"small pt-0 pb-0 px-1 b-0\" >\n                        <textarea rows=\"2\" style=\"width: 100%;\" *ngIf=\"item.status || !fileClose; else ElseResponse\" disabled > {{item.response}}</textarea>\n                        <ng-template #ElseResponse>\n                            <textarea rows=\"2\" style=\"width: 100%;\" [(ngModel)]=\"newInternalPasse.response\"> {{item.response}}</textarea>\n                        </ng-template>\n                    </td>\n\n                    <td class=\"small pt-0 pb-0 px-1 b-0\"*ngIf=\"item.status ; else ElseTo\" > {{item.to.name}} </td>\n                        <ng-template #ElseTo>\n                           <div class=\"center\">\n                                    <select class=\"form-control small mr-1 p-0 b-0 text-center w-100 h-75 peke\"\n                                        aria-label=\"Sizing example input\"\n                                        aria-describedby=\"inputGroup-sizing-sm\"\n                                        [(ngModel)]=\"newInternalPasse.to\">\n                                            <option></option>\n                                            <option  *ngFor=\"let user of users\" [value]=\"user.id\" >\n                                                {{user.name}}\n                                        </option>\n                                    </select>\n                                </div>\n                        </ng-template>\n\n                <td class=\"small pt-0 pb-0 px-1 b-0\" *ngIf=\"item.status; else ElseToDate\"> {{item.to_date}} </td>\n                <ng-template #ElseToDate>\n                    <td width=\"150\"class=\"small pt-1 pb-0 px-1 b-0 \">{{\" \"}}</td>\n                    </ng-template>\n\n                    <td class=\"small pt-0 pb-0 px-1 b-0\" *ngIf=\"item.status || !fileClose; else ElseResponsable\">\n                         <div class=\"center\">{{item.responsable.name}}</div>\n                    </td>\n                    <ng-template #ElseResponsable>\n                    <td class=\"d-flex justify-content-center m-0 b-0 pr-0 pl-1 pt-1 pb-0\">\n                        <button *ngIf=\"item.to_date == null;\"\n                        class=\"btn btn-outline-success pt-0 pb-0 px-2  ml-1  \"\n                            type=\"button\"\n                            (click)=\"internal_passe_update(item.id)\">\n                                Guardar\n                        </button>\n                    </td>\n                    </ng-template>\n\n                </tr>\n            </tbody>\n        </table>\n       </div>\n      </div>\n    </div>\n</div>\n<!-- pagination -->\n<nav aria-label=\"Page navigation example\" class=\"d-flex justify-content-center \">\n    <ul class=\"pagination\" *ngFor = \" let item of internal_passes.links; let i = index\">\n\n        <div *ngIf=\"item.active; else noActive\">\n            <li class=\"page-item active\"  >\n                <a class=\"page-link p-0 pl-1 pr-1 active\" style=\"margin: 1px;\" [innerHTML]= item.label></a>\n            </li>\n        </div>\n        <ng-template #noActive >\n\n\n            <ng-container *ngIf=\"(internal_passes.current_page === internal_passes.last_page && i == internal_passes.last_page +1) || (internal_passes.current_page === 1 && i ==0)    ; else elseTemplate\">\n                <li class=\"page-item disabled\">\n                    <p class=\"page-link p-0 pl-1 pr-1 \" style=\"margin: 1px;\" [innerHTML]= item.label></p>\n                </li>\n            </ng-container>\n            <ng-template #elseTemplate>\n                <li class=\"page-item\"  >\n                    <p class=\"page-link p-0 pl-1 pr-1 \" style=\"margin: 1px;\"  (click)=\"goToUrl(item.url)\" [innerHTML]= item.label></p>\n                </li>\n            </ng-template>\n\n        </ng-template>\n    </ul>\n</nav>\n\n");

/***/ }),

/***/ "qtcw":
/*!*************************************************************!*\
  !*** ./src/app/layout/internal-passe/passe/passe.module.ts ***!
  \*************************************************************/
/*! exports provided: PasseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasseModule", function() { return PasseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "M0ag");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _passe_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passe-routing.module */ "PAma");
/* harmony import */ var _passe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./passe.component */ "EzXm");








let PasseModule = class PasseModule {
};
PasseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _passe_routing_module__WEBPACK_IMPORTED_MODULE_6__["PasseRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
        declarations: [_passe_component__WEBPACK_IMPORTED_MODULE_7__["PasseComponent"]]
    })
], PasseModule);



/***/ })

}]);
//# sourceMappingURL=internal-passe-passe-passe-module-es2015.js.map