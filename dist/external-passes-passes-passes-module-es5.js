(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["external-passes-passes-passes-module"], {
    /***/
    "13Mq":
    /*!************************************************************************!*\
      !*** ./src/app/layout/external-passes/passes/passes-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: PassesRoutingModule */

    /***/
    function Mq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PassesRoutingModule", function () {
        return PassesRoutingModule;
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


      var _passes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./passes.component */
      "Bqcc");

      var routes = [{
        path: '',
        component: _passes_component__WEBPACK_IMPORTED_MODULE_3__["PassesComponent"],
        children: []
      }];

      var PassesRoutingModule = function PassesRoutingModule() {
        _classCallCheck(this, PassesRoutingModule);
      };

      PassesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PassesRoutingModule);
      /***/
    },

    /***/
    "Bqcc":
    /*!*******************************************************************!*\
      !*** ./src/app/layout/external-passes/passes/passes.component.ts ***!
      \*******************************************************************/

    /*! exports provided: PassesComponent */

    /***/
    function Bqcc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PassesComponent", function () {
        return PassesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_passes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./passes.component.html */
      "C68W");
      /* harmony import */


      var _passes_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./passes.component.css */
      "qQPs");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var PassesComponent = /*#__PURE__*/function () {
        function PassesComponent(DB, DATA, router) {
          _classCallCheck(this, PassesComponent);

          this.DB = DB;
          this.DATA = DATA;
          this.router = router;
          this.newPasse = {
            id: "",
            passe_id: "",
            file_id: "",
            from: "",
            from_date: "",
            to: "",
            to_date: "",
            status: true,
            response: "",
            responsable: localStorage.getItem('id'),
            responsable_name: localStorage.getItem("name")
          };
          this.alerts = [];
          this.alerts = this.DB.alerts;
        }

        _createClass(PassesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.today = new Date();
            this.newPasse.from_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.today, 'yyyy-MM-dd HH:mm:ss', 'en-US');
            this.newPasse.to_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.today, 'yyyy-MM-dd HH:mm:ss', 'en-US');
            this.file = this.DATA.file[0];
            this.newPasse.file_id = this.file.id;
            this.DB.External_passe_search(this.file.id).subscribe({
              next: function next(data) {
                _this.passes = data;

                if (!_this.passes.data[0].status) {
                  _this.closed = true;
                  _this.newPasse.to = _this.passes.data[0].to;
                } else {
                  _this.closed = false;
                }

                if (!_this.passes.data[0].to) {
                  _this.editing = true;
                } else {
                  _this.editing = false;
                }
              }
            });
            this.DB.Offices_list().subscribe({
              next: function next(data) {
                _this.aux = data;
                _this.offices = _this.aux.data;
              }
            });
          }
        }, {
          key: "addPasse",
          value: function addPasse() {
            var _this2 = this;

            this.newPasse.status = false;
            this.closed = false;
            this.DB.External_passe_create(this.newPasse).subscribe({
              next: function next(data) {
                _this2.DB.alerts.push({
                  id: 1,
                  type: 'success',
                  message: 'Pase Agregado'
                });

                var new_internal_passe = {
                  from: _this2.newPasse.responsable,
                  from_date: _this2.newPasse.from_date,
                  responsable: _this2.newPasse.responsable,
                  status: _this2.newPasse.status,
                  external_passe: data.id
                };

                _this2.DB.internal_passe_create(new_internal_passe).subscribe({
                  next: function next(data) {
                    _this2.DB.alerts.push({
                      id: 1,
                      type: 'success',
                      message: 'Pase interno agregado'
                    });

                    _this2.seePasse(data.external_passe);

                    _this2.router.navigate(['/passe']);
                  },
                  error: function error(_error) {
                    console.log(_error);

                    _this2.DB.alerts.push({
                      id: 1,
                      type: 'danger',
                      message: _error.message
                    });
                  }
                });
              },
              error: function error(_error2) {
                console.log(_error2);

                _this2.DB.alerts.push({
                  id: 1,
                  type: 'danger',
                  message: _error2.message
                });
              }
            });
          }
        }, {
          key: "updatePasse",
          value: function updatePasse(passe_id) {
            var _this3 = this;

            if (this.passes.data[passe_id].response == "") {
              this.DB.alerts.push({
                id: 1,
                type: 'success',
                message: "Falta Completar respuesta"
              });
            } else if (this.newPasse.to == "") {
              this.DB.alerts.push({
                id: 1,
                type: 'success',
                message: "Falta completar destino"
              });
            } else if (this.newPasse.to_date == "") {
              this.DB.alerts.push({
                id: 1,
                type: 'success',
                message: "Falta completar fecha de cierre"
              });
            } else {
              this.newPasse.id = this.passes.data[passe_id].id;
              this.newPasse.status = false;
              this.closed = false;
              this.DB.External_passe_update(this.newPasse).subscribe({
                next: function next(data) {
                  _this3.ngOnInit();
                },
                error: function error(err) {
                  console.log(err);
                }
              });
            }
          }
        }, {
          key: "close_external_passe",
          value: function close_external_passe(passe_id) {
            var _this4 = this;

            console.log('si aca');
            console.log(this.passes.data[passe_id].response);

            if (this.passes.data[passe_id].response == null) {
              this.DB.alerts.push({
                id: 1,
                type: 'danger',
                message: "Falta Completar respuesta"
              });
            } else if (this.passes.data[passe_id].to == "") {
              this.DB.alerts.push({
                id: 1,
                type: 'danger',
                message: "Falta completar destino"
              });
            } else {
              this.newPasse.id = this.passes.data[passe_id].id;
              this.newPasse.status = true;
              this.closed = true;
              this.DB.File_close(this.passes.data[passe_id].file.id).subscribe({
                next: function next(data) {
                  _this4.DB.External_passe_close(_this4.passes.data[passe_id].id).subscribe({
                    next: function next(data) {
                      _this4.ngOnInit();
                    },
                    error: function error(err) {
                      console.log(err);
                    }
                  });
                },
                error: function error(err) {
                  console.log(err);
                }
              });
            }

            this.newPasse.from = "";
            this.newPasse.to = "";
          }
        }, {
          key: "editPasse",
          value: function editPasse() {
            this.editing = true;
          }
        }, {
          key: "closeAlert",
          value: function closeAlert(alert) {
            var index = this.alerts.indexOf(alert);
            this.alerts.splice(index, 1);
          }
        }, {
          key: "seePasse",
          value: function seePasse(file_id) {
            this.DATA.External_passe_edit_id = file_id;
          }
        }, {
          key: "goToUrl",
          value: function goToUrl(url) {
            var _this5 = this;

            this.DB.GoToUrl(url).subscribe({
              next: function next(data) {
                _this5.passes = data;
                console.log(_this5.passes);
              }
            });
          }
        }, {
          key: "exports",
          value: function exports(id) {
            console.log(id);
            this.DB.External_passe_export(id);
          }
        }]);

        return PassesComponent;
      }();

      PassesComponent.ctorParameters = function () {
        return [{
          type: _db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      PassesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-passes',
        template: _raw_loader_passes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_passes_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], PassesComponent);
      /***/
    },

    /***/
    "C68W":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/external-passes/passes/passes.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function C68W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<!-- ////////////////////////////////header///////////////////////////// -->\n<div [@routerTransition]>\n    <div class=\"card mb-3 \">\n        <div class=\"card-header d-flex justify-content-between\">\n            <div class=\"d-flex\"> Pases de Expediente N°\n                <div class=\"ml-2 \" style=\"font-weight: 900;\">\n                    {{file.dependence_number}}-{{file.central_number}}-{{file.final_number}}\n                </div>\n            </div>\n            <button\n                type=\"button\"\n                class=\"btn btn-m btn-danger\"\n                [routerLink]=\"['/listExp']\">\n                Volver\n            </button>\n        </div>\n    <div>\n        <table class=\"table table-hover table-striped m-0\">\n            <thead>\n                <tr class=\"mx-auto\">\n                    <th style=\"width: 300px;\">Iniciador</th>\n                    <th style=\"width: auto;\" >Referencia</th>\n                    <th style=\"width: 200px;\">Grupo</th>\n                </tr>\n            </thead>\n            <tbody>\n                <td style=\"padding: 4px; padding-top: 8px; padding-bottom: 8px;\">\n                    <textarea type=\"text\"\n                        rows=\"2\"\n                        style=\"font-size: small;\"\n                        class=\"form-control mr-1  p-0 text-center\"\n                        [(ngModel)]=\"file.initiator\"\n                        aria-label=\"Sizing example input\"\n                        aria-describedby=\"inputGroup-sizing-sm\"\n                        disabled>\n                    </textarea>\n                </td>\n                <td style=\"padding: 4px; padding-top: 8px; padding-bottom: 8px;\">\n                    <textarea type=\"text\"\n                        style=\"font-size: small;\"\n                        class=\"form-control mr-1  p-0 text-center\"\n                        [(ngModel)]=\"file.concept\"\n                        aria-label=\"Sizing example input\"\n                        aria-describedby=\"inputGroup-sizing-sm\"\n                        disabled>\n                    </textarea>\n                </td>\n\n                <td style=\"padding: 4px; padding-top: 8px; padding-bottom: 8px;\">\n                    <textarea type=\"text\"\n                    style=\"font-size: small;\"\n                        class=\"form-control mr-1 p-0 text-center\"\n                        [(ngModel)]=\"file.agrupation.name\"\n                        aria-label=\"Sizing example input\"\n                        aria-describedby=\"inputGroup-sizing-sm\"\n                        disabled>\n                    </textarea>\n                </td>\n            </tbody>\n        </table>\n    </div>\n\n<!-- //////////////////////////////////ALERTS//////////////////////////// -->\n<p *ngFor=\"let alert of alerts\" class=\"small\">\n    <ngb-alert class=\"m-0\" (close)=\"closeAlert(alert)\" [type]=\"alert.type\">{{alert.message}}</ngb-alert>\n</p>\n\n<!-- //////////////////////////////////TABLA//////////////////////////// -->\n        <div class=\"card-body table-responsive p-0\">\n            <table class=\"table table-hover table-striped mb-0\">\n                <thead>\n                    <tr class=\"mx-auto\">\n                        <th style=\"width: 3px;\" class=\"small pt-0 pb-0 px-2\">N°</th>\n                        <th style=\"width: 200px;\" class=\"small pt-0 pb-0 px-2 \">Desde</th>\n                        <th style=\"width:100px;\" class=\"small pt-0 pb-0 px-2\">Fecha Ingreso</th>\n                        <th class=\"small pt-0 pb-0 px-2\">Respuesta</th>\n                        <th style=\"width:100px;\" class=\"small pt-0 pb-0 px-2\">En Posesión de</th>\n                        <th style=\"width:200px;\" class=\"small pt-0 pb-0 px-2\">Destino</th>\n                        <th style=\"width: 100px;\" class=\"small pt-0 pb-0 px-2\">Fecha Salida</th>\n                        <th style=\"width: 115px;\" class=\"small pt-0 pb-0 px-2\"></th>\n\n                    </tr>\n                </thead>\n                <tbody >\n                    <tr *ngIf=\"!closed\" >\n                        <td class=\"small m-0 p-1\"> {{passes.total + 1}} </td>\n\n                        <td class=\"m-0 p-1\">\n\n                            <select class=\"form-control small mr-1 p-0 text-center w-100 h-75 \"\n                                aria-label=\"Sizing example input\"\n                                aria-describedby=\"inputGroup-sizing-sm\"\n                                [(ngModel)]=\"newPasse.from\">\n                                    <option></option>\n                                    <option *ngFor=\"let office of offices\" [value]=\"office.id\">\n                                        {{office.name}}\n                                    </option>\n                            </select>\n\n                            <td class=\"small pt-0 pb-0 px-2\"> {{newPasse.from_date}} </td>\n                        <td  class=\"m-0 p-0 pt-1 px-1\"><textarea style=\"height:25px;\" small type=\"text\" class=\"small b-0 p-0 m-0 w-100\" disabled [(ngModel)]=\"newPasse.response\"></textarea></td>\n                        <td  class=\"m-0 p-1\"><input type=\"text\" class=\"small w-100\" [(ngModel)]=\"newPasse.responsable_mame\"   disabled></td>\n\n                        <select class=\"form-control small mr-1 p-0 text-center w-100 h-75 \" disabled\n                                aria-label=\"Sizing example input\"\n                                aria-describedby=\"inputGroup-sizing-sm\"\n                                [(ngModel)]=\"newPasse.to\">\n                                <option></option>\n                                    <option *ngFor=\"let office of offices\" [value]=\"office.id\">\n                                        {{office.name}}\n                                    </option>\n                            </select>\n\n                            <td class=\"small pt-0 pb-0 px-2\"> {{newPasse.to_date}} </td>\n                        <td class=\"m-0 p-1 d-flex justify-content-center\">\n                            <button\n                                class=\"btn btn-outline-success small p-0 px-1 m-0 h-100\"\n                                aria-label=\"Sizing example input\"\n                                aria-describedby=\"inputGroup-sizing-sm\"\n                                type=\"button\"\n                                (click)=\"addPasse()\">\n                                    Guardar\n                            </button>\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let passe of passes.data; let i = index \">\n                        <td class=\"small pt-0 pb-0 px-2\" > {{passes.from + i}} </td>\n                        <td class=\"small pt-0 pb-0 px-2\" >  {{passe.from__office.name}} </td>\n                        <td class=\"small pt-0 pb-0 px-2\" > {{passe.from_date}}</td>\n                        <td class=\"small pt-0 pb-0 px-2\" > <textarea rows=\"2\" style=\"width: 100%; height: 100%;\" disabled>{{passe.response}}</textarea>  </td>\n\n                        <td class=\"small pt-0 pb-0 px-2\"> {{passe.user.name}} </td>\n                        <td class=\"small pt-0 pb-0 px-2 \"\n\n                        *ngIf=\"passe.status; else elseTo\"> {{passe.to__office.name}} </td>\n                        <ng-template #elseTo >\n                            <td class=\"small pt-1 pb-0 px-2 \" *ngIf=\"!editing ; else elseComplete\">\n                                {{passe.to__office.name}}\n                            </td>\n\n                            <ng-template #elseComplete>\n                                <select class=\"form-control small mr-1 p-0 text-center w-100 h-75 \"\n                                        aria-label=\"Sizing example input\"\n                                        aria-describedby=\"inputGroup-sizing-sm\"\n                                        [(ngModel)]=\"newPasse.to\">\n                                            <option *ngFor=\"let office of offices\" [value]=\"office.id\">\n                                        {{office.name}}\n                                            </option>\n                                </select>\n                            </ng-template>\n                        </ng-template>\n\n                        <td style=\" padding: 0; padding-right: 5px;\" *ngIf=\"!passe.status; else elseClose\" >\n\n\n                            <div style=\"display: flex; justify-content: space-between;\">\n\n                                <div *ngIf = \"!passe.status\" style=\"display: flex;\">\n\n                                <button *ngIf=\"!editing\"\n                                    style=\"font-size: small;\"\n                                    class=\"btn btn-outline-warning pt-0 pb-0 px-2  ml-1 mt-1 \"\n                                    type=\"button\"\n                                    (click)=\"editPasse()\">\n                                        Editar\n                                </button>\n\n                                    <button *ngIf=\"editing || passe.to == null; else elseSave\"\n                                        class=\"btn btn-outline-success pt-0 pb-0 px-2  ml-1 mt-1 \"\n                                        type=\"button\"\n                                        (click)=\"updatePasse(i)\">\n                                            guardar\n                                    </button>\n\n                                    <ng-template #elseSave>\n                                        <button\n                                            style=\"font-size: small;\"\n                                            class=\"btn btn-outline-success pt-0 pb-0 px-2  ml-1 mt-1 small\"\n                                            type=\"button\"\n                                            (click)=\"close_external_passe(i)\">\n                                                Cerrar\n                                        </button>\n                                    </ng-template>\n                                </div>\n                            </div>\n                        </td>\n\n                        <ng-template #elseClose>\n                            <td class=\"small pt-0 pb-0 px-2\"> {{passe.to_date}} </td>\n                        </ng-template>\n\n                        <td style= \"padding: 0; padding-right: 5px; \">\n                            <div style=\"display: flex;justify-content: space-between; \">\n                                <button\n                                    style=\"font-size: small;\"\n                                    class=\"btn btn-outline-primary pt-0 pb-0 px-2  mt-1 small\"\n                                    type=\"button\"\n                                    (click)=\"seePasse(passe.id)\"\n                                    [routerLink]=\"['/passe']\" >\n                                        ver\n                                </button>\n                                    <button *ngIf=\"!passe.status && passe.to && passe.response \"\n                                    style=\"font-size: small;\"\n                                        class=\"btn btn-outline-info pt-0 pb-0 px-2  mt-1 small \"\n                                        type=\"button\"\n                                        (click)=\"exports(passe.id)\">\n                                            Imprimir\n                                </button>\n                            </div>\n                        </td>\n                    </tr>\n                   </tbody>\n            </table>\n\n        </div>\n    </div>\n</div>\n\n\n\n<!-- pagination -->\n<nav aria-label=\"Page navigation example\" class=\"d-flex justify-content-center \">\n    <ul class=\"pagination\" *ngFor = \" let item of passes.links; let i = index\">\n\n        <div *ngIf=\"item.active; else noActive\">\n            <li class=\"page-item active\"  >\n                <a class=\"page-link p-0 pl-1 pr-1 active\" style=\"margin: 1px;\" [innerHTML]= item.label></a>\n            </li>\n        </div>\n        <ng-template #noActive >\n\n\n            <ng-container *ngIf=\"(passes.current_page === passes.last_page && i == passes.last_page +1) || (passes.current_page === 1 && i ==0)    ; else elseTemplate\">\n                <li class=\"page-item disabled\">\n                    <p class=\"page-link p-0 pl-1 pr-1 \" style=\"margin: 1px;\" [innerHTML]= item.label></p>\n                </li>\n            </ng-container>\n            <ng-template #elseTemplate>\n                <li class=\"page-item\"  >\n                    <p class=\"page-link p-0 pl-1 pr-1 \" style=\"margin: 1px;\"  (click)=\"goToUrl(item.url)\" [innerHTML]= item.label></p>\n                </li>\n            </ng-template>\n\n        </ng-template>\n    </ul>\n</nav>\n<!-- pagination end -->\n\n";
      /***/
    },

    /***/
    "Qz+8":
    /*!****************************************************************!*\
      !*** ./src/app/layout/external-passes/passes/passes.module.ts ***!
      \****************************************************************/

    /*! exports provided: PassesModule */

    /***/
    function Qz8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PassesModule", function () {
        return PassesModule;
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


      var _passes_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./passes-routing.module */
      "13Mq");
      /* harmony import */


      var _passes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./passes.component */
      "Bqcc");

      var PassesModule = function PassesModule() {
        _classCallCheck(this, PassesModule);
      };

      PassesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _passes_routing_module__WEBPACK_IMPORTED_MODULE_6__["PassesRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
        declarations: [_passes_component__WEBPACK_IMPORTED_MODULE_7__["PassesComponent"]]
      })], PassesModule);
      /***/
    },

    /***/
    "qQPs":
    /*!********************************************************************!*\
      !*** ./src/app/layout/external-passes/passes/passes.component.css ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function qQPs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "input[type=number]::-webkit-outer-spin-button,\n\ninput[type=number]::-webkit-inner-spin-button {\n\n    -webkit-appearance: none;\n\n    margin: 0;\n\n}\n\n\n\ninput[type=number] {\n\n    -moz-appearance:textfield;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3Nlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0lBSUksd0JBQXdCOztJQUV4QixTQUFTOztBQUViOzs7O0FBSUE7O0lBRUkseUJBQXlCOztBQUU3QiIsImZpbGUiOiJwYXNzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcblxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblxuICAgIG1hcmdpbjogMDtcblxufVxuXG5cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcblxuICAgIC1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7XG5cbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=external-passes-passes-passes-module-es5.js.map