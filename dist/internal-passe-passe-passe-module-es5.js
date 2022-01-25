(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["internal-passe-passe-passe-module"], {
    /***/
    "D0U/":
    /*!*****************************************************************!*\
      !*** ./src/app/layout/internal-passe/passe/passe.component.css ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function D0U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".resaltado {\n    font-size: larger;\n    font-weight: 900;\n    padding-right: 6px;\n    padding-left: 6px;\n}\n\n.centrado {\n    padding-top: 2px;\n\n}\n\n.peke {\n    font-size: small;\n    padding-right: 6px;\n    padding-left: 6px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3NlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoicGFzc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNhbHRhZG8ge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xufVxuXG4uY2VudHJhZG8ge1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG5cbn1cblxuLnBla2Uge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "EzXm":
    /*!****************************************************************!*\
      !*** ./src/app/layout/internal-passe/passe/passe.component.ts ***!
      \****************************************************************/

    /*! exports provided: PasseComponent */

    /***/
    function EzXm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasseComponent", function () {
        return PasseComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_passe_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./passe.component.html */
      "mhH2");
      /* harmony import */


      var _passe_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./passe.component.css */
      "D0U/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../db.service */
      "nA5i");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var PasseComponent = /*#__PURE__*/function () {
        function PasseComponent(DB, router, DATA, modalService) {
          _classCallCheck(this, PasseComponent);

          this.DB = DB;
          this.router = router;
          this.DATA = DATA;
          this.modalService = modalService;
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
          this.searchModalProvi = {
            id: "",
            name: "",
            text: "",
            office_id: ""
          };
          this.totPage = [];
          this.currentPage = 0;
          this.closeResult = '';
          this.alerts = [];
          this.alerts = this.DB.alerts;
        }

        _createClass(PasseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.DB.Provis_list(this.searchModalProvi).subscribe({
              next: function next(data) {
                _this.provis = data;
                console.log(data);
              }
            });
            this.file = this.DATA.file;
            this.newInternalPasse.file_id = this.file[0].id;
            this.fileClose = this.file[0].status;
            this.external_passe_id = this.DATA.External_passe_edit_id;
            this.DB.internal_passe_search(this.external_passe_id).subscribe({
              next: function next(data) {
                _this.internal_passes = data;
                _this.external_passe = _this.internal_passes.data[0].external_passe;
                _this.newInternalPasse.response = _this.internal_passes.data[0].response;
              }
            });
            this.DB.Offices_list().subscribe({
              next: function next(data) {
                _this.aux = data;
                _this.offices = _this.aux.data;
                _this.external_passe_from = _this.offices.filter(function (x) {
                  return x.id == _this.external_passe.from;
                });
              }
            });
            this.DB.userList().subscribe({
              next: function next(data) {
                _this.users = data;
              }
            });
            this.today = new Date();
            this.newInternalPasse.to_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(this.today, 'dd-MM-yyyy HH:mm:ss', 'es-AR');
            this.currentPage = 1;
          }
        }, {
          key: "internal_passe_create",
          value: function internal_passe_create() {
            var _this2 = this;

            this.newInternalPasse.from = Number(localStorage.getItem("id"));
            this.newInternalPasse.external_passe = this.external_passe_id;
            this.newInternalPasse.from_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(this.today, 'dd-MM-yyy HH:mm:ss', 'es-AR');
            this.newInternalPasse.status = "0";
            this.newInternalPasse.to_date = null;
            console.log(this.newInternalPasse);
            this.DB.internal_passe_create(this.newInternalPasse).subscribe({
              next: function next(data) {
                console.log(data);

                _this2.ngOnInit();
              }
            });
          }
        }, {
          key: "internal_passe_update",
          value: function internal_passe_update(id) {
            var _this3 = this;

            this.newInternalPasse.responsable = localStorage.getItem("id");
            this.newInternalPasse.status = "1";
            this.newInternalPasse.to_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(this.today, 'yyyy-MM-dd HH:mm:ss', 'en-US');
            this.newInternalPasse.external_passe = this.external_passe_id;
            this.newInternalPasse.id = id;
            this.DB.internal_passe_update(this.newInternalPasse).subscribe({
              next: function next(data) {
                _this3.newInternalPasse.from = _this3.newInternalPasse.to;
                _this3.newInternalPasse.from_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(_this3.today, 'yyyy-MM-dd HH:mm:ss', 'en-US');
                _this3.newInternalPasse.status = "0";
                _this3.newInternalPasse.to = null;
                _this3.newInternalPasse.to_date = null;
                console.log(_this3.newInternalPasse);

                _this3.DB.internal_passe_create(_this3.newInternalPasse).subscribe({
                  next: function next(data) {
                    _this3.ngOnInit();
                  }
                });

                _this3.ngOnInit();
              }
            });
          }
        }, {
          key: "open_provis_models",
          value: function open_provis_models() {}
        }, {
          key: "goToUrl",
          value: function goToUrl(url) {
            var _this4 = this;

            this.DB.GoToUrl(url).subscribe({
              next: function next(data) {
                _this4.internal_passes = data;
                console.log(_this4.internal_passes);
              }
            });
          }
        }, {
          key: "closeAlert",
          value: function closeAlert(alert) {
            var index = this.alerts.indexOf(alert);
            this.alerts.splice(index, 1);
          } //////////////////MODAL/////////////////////

        }, {
          key: "open",
          value: function open(content) {
            var _this5 = this;

            this.aux = this.newInternalPasse.response;
            this.modalService.open(content, {
              size: 'lg',
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this5.closeResult = "Closed with: ".concat(result);
              _this5.newInternalPasse.response = result;
            }, function (reason) {
              _this5.closeResult = "Dismissed ".concat(_this5.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            this.newInternalPasse.response = this.aux;

            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "goToUrlModal",
          value: function goToUrlModal(url) {
            var _this6 = this;

            var data = {
              name: this.searchModalProvi.name,
              office_id: this.searchModalProvi.office_id
            };
            this.DB.GoToUrlFile(url, data).subscribe({
              next: function next(data) {
                _this6.provis = data;
                console.log(_this6.provis);
              }
            });
          }
        }, {
          key: "searchModal",
          value: function searchModal() {
            var _this7 = this;

            this.DB.Provis_list(this.searchModalProvi).subscribe({
              next: function next(data) {
                _this7.provis = data;
                console.log(data);
              }
            });
          }
        }]);

        return PasseComponent;
      }();

      PasseComponent.ctorParameters = function () {
        return [{
          type: _db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
        }];
      };

      PasseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-passe',
        template: _raw_loader_passe_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_passe_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]])], PasseComponent);
      /***/
    },

    /***/
    "PAma":
    /*!*********************************************************************!*\
      !*** ./src/app/layout/internal-passe/passe/passe-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: PasseRoutingModule */

    /***/
    function PAma(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasseRoutingModule", function () {
        return PasseRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _passe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./passe.component */
      "EzXm");

      var routes = [{
        path: '',
        component: _passe_component__WEBPACK_IMPORTED_MODULE_3__["PasseComponent"]
      }];

      var PasseRoutingModule = function PasseRoutingModule() {
        _classCallCheck(this, PasseRoutingModule);
      };

      PasseRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PasseRoutingModule);
      /***/
    },

    /***/
    "mhH2":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/internal-passe/passe/passe.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mhH2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card mb-3\">\n    <div class=\"card-header d-flex justify-content-between\">\n        <div class=\"d-flex\"> Expediente N°\n            <div class=\"ml-2\" style=\"font-weight: 900;\"> {{file[0].dependence_number}}-{{file[0].central_number}}-{{file[0].final_number}} </div>\n        </div>\n        <button\n            type=\"button\" class=\"btn btn-m btn-danger\"\n            [routerLink]=\"['/passes']\" >\n            Volver\n        </button>\n    </div>\n\n<div> <!--inicio datos ep-->\n\n<!-- //////////////////////////////////ALERTS//////////////////////////// -->\n    <p *ngFor=\"let alert of alerts\"class=\"small\">\n        <ngb-alert class=\"m-0\" (close)=\"closeAlert(alert)\" [type]=\"alert.type\">{{alert.message}}</ngb-alert>\n    </p>\n\n\n<!-- //////////////////////////////////TABLET//////////////////////////// -->\n    <table class=\"table table-hover table-striped m-0\">\n        <thead class=\"\">\n            <tr class=\"mx-auto\">\n                <th style=\"width: 300px;\" >Iniciador</th>\n                <th style=\"width: auto;\" >Referencia</th>\n                <th style=\"width: 200px;\" >Grupo</th>\n            </tr>\n        </thead>\n        <tbody>\n                <td style=\"padding: 4px; padding-top: 8px; padding-bottom: 8px;\">\n                    <textarea type=\"text\"\n                        rows=\"2\"\n                        style=\"font-size: small;\"\n                        class=\"form-control mr-1  p-0 text-center\"\n                        [(ngModel)]=\"file[0].initiator\"\n                        aria-label=\"Sizing example input\"\n                        aria-describedby=\"inputGroup-sizing-sm\"\n                        disabled>\n                    </textarea>\n                </td>\n                <td style=\"padding: 4px; padding-top: 8px; padding-bottom: 8px;\">\n                    <textarea type=\"text\"\n                        class=\"form-control mr-1  p-0 text-center\"\n                        style=\"font-size: small;\"\n                        [(ngModel)]=\"file[0].concept\"\n                        aria-label=\"Sizing example input\"\n                        aria-describedby=\"inputGroup-sizing-sm\"\n                        disabled>\n                    </textarea>\n                </td>\n                <td style=\"padding: 4px; padding-top: 8px; padding-bottom: 8px;\">\n                    <textarea type=\"text\"\n                    class=\"form-control mr-1 p-0 text-center\"\n                    style=\"font-size: small;\"\n                    [(ngModel)]=\"file[0].agrupation.name\"\n                    aria-label=\"Sizing example input\"\n                    aria-describedby=\"inputGroup-sizing-sm\"\n                    disabled>\n                    </textarea>\n                </td>\n            </tbody>\n        </table>\n</div>\n\n    <div class=\"card  small\">\n        <div class=\"card-header d-flex justify-content-between p-0\">\n            <div class=\"d-flex\"> <div class=\"centrado\"> Pase desde</div> <div class=\"resaltado\">{{ external_passe_from[0].name }}</div> <div class=\"centrado\"> ingresado el </div> <div class=\"resaltado\">{{ external_passe.from_date | date: 'shortDate'}}</div>\n                <div class=\"ml-2\" style=\"font-weight: 900;\"> {{external_passe_from.id}} </div>\n            </div>\n        </div>\n\n<!-- //////////////////////////////////MODAL PROVIS//////////////////////////// -->\n\n        <ng-template #content let-modal>\n            <div class=\"modal-header\"  style=\"padding: 2px;\">\n              <div class=\"modal-title\" style=\"text-align: center; padding-top: 5px; width: 90%;\" id=\"modal-basic-title\">Modelos de Providencias </div>\n              <button\n              style=\"font-size: small;\"\n              type=\"button\" class=\"btn btn-m btn-danger\"\n              (click)=\"modal.dismiss('Cross click')\">\n              Volver\n          </button>\n            </div>\n            <div class=\"modal-body\">\n                <table class=\"table table-hover table-striped m-0\">\n                    <thead class=\"\">\n                        <tr class=\"mx-auto\">\n                            <th style=\"width: 60%; font-size: small; padding: 3px;\" >Nombre</th>\n                            <th style=\"font-size: small;padding: 3px;\" > Dependencia</th>\n                          <th style=\"width: 60px; font-size: small;padding: 3px;\" ></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <td>\n                            <input\n                                type=\"text\"\n                                style=\"font-size: small;\"\n                                class=\"form-control mr-1 p-0 text-center \"\n                                [(ngModel)]=\"searchModalProvi.name\"\n                                aria-label=\"Sizing example input\"\n                                aria-describedby=\"inputGroup-sizing-sm\"\n                                style=\"height: 22px; \">\n                        </td>\n                        <td>\n                            <select class=\"form-control small mr-1 p-0 b-0 text-center w-100 h-75 peke\"\n                                aria-label=\"Sizing example input\"\n                                aria-describedby=\"inputGroup-sizing-sm\"\n                                [(ngModel)]=\"searchModalProvi.office_id\">\n                                    <option></option>\n                                    <option  *ngFor=\"let office of offices\" [value]=\"office.id\" >\n                                        {{office.name}}\n                                </option>\n                            </select>\n                        </td>\n                        <td>\n                            <button\n                            class=\"btn btn-outline-info small pt-0 pb-0 px-2\"\n                            type=\"button\"\n                            (click)=\"searchModal()\"\n                            >\n                            buscar\n                        </button>\n                        </td>\n                    </tbody>\n                </table>\n\n\n                <table class=\"table table-hover table-striped m-0\">\n                    <thead class=\"\">\n                        <th style=\"width: 150px; font-size: small;padding: 3px;\" >Nombre</th>\n                            <th style=\"width: 200; font-size: small;padding: 3px;\" > Dependencia</th>\n                            <th style=\"width: auto; font-size: small;padding: 3px;\" > Texto</th>\n                            <th style=\"width: 60px; font-size: small;padding: 3px;\" ></th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of provis.data; let i = index \">\n                        <td style=\"font-size: small; padding: 4px;\" (click)=\"modal.close(item.text)\"> {{item.name}} </td>\n                        <td style=\"font-size: small; padding: 4px;\" (click)=\"modal.close(item.text)\"> {{item.office.name}} </td>\n                        <td style=\"font-size: small; padding: 4px;\" (click)=\"modal.close(item.text)\"> {{item.text}} </td>\n                        <td style=\"font-size: small; align-items: center; vertical-align: middle;\" >\n                            <button type=\"button\" class=\"btn btn-outline-success\" style=\"font-size: small;\"  (click)=\"modal.close(item.text)\">Copiar</button>\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <!-- /////////////////////////modal pagination///////////////////////////////////// -->\n\n            <nav aria-label=\"Page navigation example\" class=\"d-flex justify-content-center \">\n                <ul class=\"pagination\" *ngFor = \" let item of provis.links; let i = index\">\n\n                    <div *ngIf=\"item.active; else noActive\">\n                        <li class=\"page-item active\"  >\n                            <a class=\"page-link p-0 pl-1 pr-1 active\" style=\"margin: 1px;\" [innerHTML]= item.label></a>\n                        </li>\n                    </div>\n                    <ng-template #noActive >\n\n\n                        <ng-container *ngIf=\"(provis.current_page === provis.last_page && i == provis.last_page +1) || (provis.current_page === 1 && i ==0)    ; else elseTemplate\">\n                            <li class=\"page-item disabled\">\n                                <p class=\"page-link p-0 pl-1 pr-1 \" style=\"margin: 1px;\" [innerHTML]= item.label></p>\n                            </li>\n                        </ng-container>\n                        <ng-template #elseTemplate>\n                            <li class=\"page-item\"  >\n                                <p class=\"page-link p-0 pl-1 pr-1 \" style=\"margin: 1px;\"  (click)=\"goToUrlModal(item.url)\" [innerHTML]= item.label></p>\n                            </li>\n                        </ng-template>\n\n                    </ng-template>\n                </ul>\n            </nav>\n        </ng-template>\n\n<!-- //////////////////////////////////MODAL writing//////////////////////////// -->\n\n<ng-template #writing let-modal>\n    <div class=\"modal-header\"  style=\"padding: 2px;\">\n\n        <div class=\"modal-title\"\n        style=\"text-align: center; padding-top: 5px; width: 90%;\"\n        id=\"modal-basic-title\">\n        Respuesta\n        </div>\n\n        <button\n        style=\"font-size: small;\"\n        type=\"button\" class=\"btn btn-m btn-danger\"\n        (click)=\"modal.dismiss('Cross click')\">\n        Volver\n        </button>\n    </div>\n\n\n    <div class=\"modal-body\">\n        <textarea\n        name=\"\"\n        style=\"width: 100%;\"\n        rows=\"10\"\n        value =\"{{newInternalPasse.response}}\"\n        [(ngModel)]=\"newInternalPasse.response\">\n        </textarea>\n    </div>\n\n    <div class=\"modal-footer\">\n\n        <button\n            style=\"font-size: small;\"\n            class=\"btn btn-outline-info pt-0 pb-0 px-2  ml-1\"\n            (click)=\"open(content)\"\n            type=\"button\">\n            Modelos\n        </button>\n\n        <button\n            style=\"font-size: small;\"\n            class=\"btn btn-outline-success pt-0 pb-0 px-2  ml-1\"\n            (click)=\"modal.close(newInternalPasse.response)\"\n            type=\"button\">\n            Guardar\n        </button>\n    </div>\n</ng-template>\n\n<!-- //////////////////////////////////FINAL MODAL writing//////////////////////////// -->\n    <div>\n        <div class=\"card-body table-responsive p-0\">\n        <table class=\"table table-hover table-striped\">\n            <thead>\n                <tr class=\"mx-auto\">\n                    <th style=\"width: 3px;\"  class=\"small pt-0 pb-0 px-2 \">N°</th>\n                    <th style=\"width: 80px;\" class=\"small pt-0 pb-0 px-2 \">Desde</th>\n                    <th style=\"width: 80px;\" class=\"small pt-0 pb-0 px-2\">Fecha Ingreso</th>\n                    <th class=\"small pt-0 pb-0 px-2\">Respuesta</th>\n                    <th style=\"width: 100px;\" class=\"small pt-0 pb-0 px-2\">Hacia</th>\n                    <th style=\"width: 80px;\" class=\"small pt-0 pb-0 px-2\">Fecha salida</th>\n                    <th style=\"width: 80px;\" class=\"small pt-0 pb-0 px-2\">Responsable</th>\n                </tr>\n            </thead>\n            <tbody >\n                <tr *ngFor=\"let item of internal_passes.data; let i = index \">\n                    <td class=\"small pt-0 pb-0 px-1 b-0 \" > {{ internal_passes.from + i}} </td>\n                    <td class=\"small pt-0 pb-0 px-1 b-0\" > {{item.from.name}} </td>\n                    <td class=\"small pt-0 pb-0 px-1 b-0\" > {{item.from_date}} </td>\n\n                    <td class=\"small pt-0 pb-0 px-1 b-0\" >\n                        <textarea rows=\"2\" style=\"width: 100%;\" *ngIf=\"item.status || !fileClose; else ElseResponse\" disabled > {{item.response}}</textarea>\n                        <ng-template #ElseResponse>\n                            <textarea rows=\"2\" style=\"width: 100%;\"   (click)=\"open(writing)\" [(ngModel)]=\"newInternalPasse.response\"> {{item.response}}</textarea>\n                        </ng-template>\n                    </td>\n\n                    <td class=\"small pt-0 pb-0 px-1 b-0\"*ngIf=\"item.status ; else ElseTo\" > {{item.to.name}} </td>\n                        <ng-template #ElseTo>\n                           <div class=\"center\">\n                                    <select class=\"form-control small mr-1 p-0 b-0 text-center w-100 h-75 peke\"\n                                        aria-label=\"Sizing example input\"\n                                        aria-describedby=\"inputGroup-sizing-sm\"\n                                        [(ngModel)]=\"newInternalPasse.to\">\n                                            <option></option>\n                                            <option  *ngFor=\"let user of users\" [value]=\"user.id\" >\n                                                {{user.name}}\n                                        </option>\n                                    </select>\n                                </div>\n                        </ng-template>\n\n                <td class=\"small pt-0 pb-0 px-1 b-0\" *ngIf=\"item.status; else ElseToDate\"> {{item.to_date}} </td>\n                <ng-template #ElseToDate>\n                    <td class=\"small pt-1 pb-0 px-1 b-0 \" style=\" vertical-align: middle;\" >\n                        <button\n                        style=\"font-size: small;\"\n                        class=\"btn btn-outline-info pt-0 pb-0 px-2  ml-1\"\n                        (click)=\"open(content)\"\n                        type=\"button\">\n                                Modelos\n                        </button>\n                    </td>\n                    </ng-template>\n\n                    <td class=\"small pt-0 pb-0 px-1 b-0\" *ngIf=\"item.status || !fileClose; else ElseResponsable\">\n                         <div class=\"center\">{{item.responsable.name}}</div>\n                    </td>\n                    <ng-template #ElseResponsable>\n                    <td class=\"d-flex justify-content-center vertical-align-midlle m-0 b-0 pr-0 pl-1 pt-1 pb-0\">\n                        <button *ngIf=\"item.to_date == null;\"\n                        class=\"btn btn-outline-success pt-0 pb-0 px-2  ml-1  \"\n                            type=\"button\"\n                            (click)=\"internal_passe_update(item.id)\">\n                                Guardar\n                        </button>\n                    </td>\n                    </ng-template>\n\n                </tr>\n            </tbody>\n        </table>\n       </div>\n      </div>\n    </div>\n</div>\n<!-- pagination -->\n<nav aria-label=\"Page navigation example\" class=\"d-flex justify-content-center \">\n    <ul class=\"pagination\" *ngFor = \" let item of internal_passes.links; let i = index\">\n\n        <div *ngIf=\"item.active; else noActive\">\n            <li class=\"page-item active\"  >\n                <a class=\"page-link p-0 pl-1 pr-1 active\" style=\"margin: 1px;\" [innerHTML]= item.label></a>\n            </li>\n        </div>\n        <ng-template #noActive >\n\n\n            <ng-container *ngIf=\"(internal_passes.current_page === internal_passes.last_page && i == internal_passes.last_page +1) || (internal_passes.current_page === 1 && i ==0)    ; else elseTemplate\">\n                <li class=\"page-item disabled\">\n                    <p class=\"page-link p-0 pl-1 pr-1 \" style=\"margin: 1px;\" [innerHTML]= item.label></p>\n                </li>\n            </ng-container>\n            <ng-template #elseTemplate>\n                <li class=\"page-item\"  >\n                    <p class=\"page-link p-0 pl-1 pr-1 \" style=\"margin: 1px;\"  (click)=\"goToUrl(item.url)\" [innerHTML]= item.label></p>\n                </li>\n            </ng-template>\n\n        </ng-template>\n    </ul>\n</nav>\n\n";
      /***/
    },

    /***/
    "qtcw":
    /*!*************************************************************!*\
      !*** ./src/app/layout/internal-passe/passe/passe.module.ts ***!
      \*************************************************************/

    /*! exports provided: PasseModule */

    /***/
    function qtcw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasseModule", function () {
        return PasseModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared */
      "M0ag");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _passe_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./passe-routing.module */
      "PAma");
      /* harmony import */


      var _passe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./passe.component */
      "EzXm");
      /* harmony import */


      var _modal_provis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./modal-provis.component */
      "vqvH");

      var PasseModule = function PasseModule() {
        _classCallCheck(this, PasseModule);
      };

      PasseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _passe_routing_module__WEBPACK_IMPORTED_MODULE_6__["PasseRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
        declarations: [_passe_component__WEBPACK_IMPORTED_MODULE_7__["PasseComponent"], _modal_provis_component__WEBPACK_IMPORTED_MODULE_8__["ModalPovis"]]
      })], PasseModule);
      /***/
    },

    /***/
    "vqvH":
    /*!***********************************************************************!*\
      !*** ./src/app/layout/internal-passe/passe/modal-provis.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ModalPovis */

    /***/
    function vqvH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalPovis", function () {
        return ModalPovis;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var ModalPovis = /*#__PURE__*/function () {
        function ModalPovis(modalService) {
          _classCallCheck(this, ModalPovis);

          this.modalService = modalService;
          this.closeResult = '';
        }

        _createClass(ModalPovis, [{
          key: "open",
          value: function open(content) {
            var _this8 = this;

            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this8.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this8.closeResult = "Dismissed ".concat(_this8.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }]);

        return ModalPovis;
      }();

      ModalPovis.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }];
      };

      ModalPovis = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'modal-provis'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])], ModalPovis);
      /***/
    }
  }]);
})();
//# sourceMappingURL=internal-passe-passe-passe-module-es5.js.map