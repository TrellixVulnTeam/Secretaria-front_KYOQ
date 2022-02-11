(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Files-create-exp-create-exp-module"], {
    /***/
    "0DXs":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/Files/create-exp/create-exp.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DXs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card mb-3\">\n    <div class=\"card-header d-flex justify-content-between\">Agregar Expediente\n      <div class=\"d-flex\">\n        <div class = \"d-flex\" *ngIf =\"firstSearch\">\n            <div *ngIf=\"empty; else dontEmpty\" >\n                <button (click)='saveExp()'\n                type=\"button\"\n                class=\"btn btn-m btn-success mr-1\">\n                Guardar\n                </button>\n            </div>\n            <ng-template #dontEmpty>\n                <button #SeePasses (click)='see_passe(fileSearch.search_id)'\n                type=\"button\"\n                class=\"btn btn-m btn-success mr-1\"\n                [routerLink]=\"['/passes']\"  >\n                Ver Pase\n                </button>\n            </ng-template>\n        </div>\n\n        <button\n            type=\"button\"\n            class=\"btn btn-m btn-danger\"\n            [routerLink]=\"['/listExp']\">\n            Volver\n        </button>\n      </div>\n    </div>\n    <p *ngFor=\"let alert of alerts\">\n      <ngb-alert class=\"m-0\" (close)=\"closeAlert(alert)\" [type]=\"alert.type\">{{alert.message}}</ngb-alert>\n  </p>\n\n    <div class=\"card-body table-responsive\">\n        <div class=\"row\">\n            <div class=\"col-xl-3 text-xs-center\">\n                <div class=\"card mb-3 d-flex\">\n                    <div class=\"card-body \">\n                        Numero:\n                        <div class=\"row d-flex justify-content-center m-0 w-100\">\n                            <input #N1\n                            oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                            maxlength = \"5\"\n                            type=\"text\"\n                            class=\"col-xl-4 text-center p-0 \"\n                            [(ngModel)]=\"fileSearch.search_dependence_number\"\n                            (ngModelChange) = \"changeFocus(1)\"\n                            name = \"dependence\"\n                            id='dependence'>\n\n                            <div class=\"col-xl-1 text-center p-0 \">-</div>\n\n                            <input #N2\n                            oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                            maxlength = \"7\"\n                            type=\"text\"\n                            class=\"col-xl-5 text-center p-0\"\n                            [(ngModel)]=\"fileSearch.search_number\"\n                            (ngModelChange) = \"changeFocus(2)\"\n                            name = \"number\"\n                            id='number'>\n\n                            <div class=\"col-xl-1 text-center p-0 \">-</div>\n\n                            <input #N3\n                            oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                            maxlength = \"1\"\n                            type=\"text\"\n                            class=\"col-xl-1 text-center p-0\"\n                            [(ngModel)]=\"fileSearch.search_final_number\"\n                            (ngModelChange) = \"changeFocus(3)\"\n                            name = \"final_number\"\n                            id='final_number'>\n\n\n                        </div>\n                    </div>\n                    <button #BSearch\n                    class=\"btn btn-outline-info small pt-0 pb-0 px-2\"\n                    type=\"button\"\n                    (click)=\"search()\">\n                    <div *ngIf=\"!firstSearch; else elseBlock\">buscar</div>\n                    <ng-template #elseBlock>Nueva Busqueda</ng-template>\n                    </button>\n                </div>\n            </div>\n            <div class=\"col-xl-6 text-xs-center\">\n                <div class=\"card mb-3\">\n                    <div class=\"card-body\">\n                        Iniciador:\n                        <input #Init type=\"text\"\n                         [(ngModel)]=\"fileSearch.search_initiator\"\n                          class=\"w-100 \"\n                          id='initiator'\n                         [disabled]= \"!activate \">\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 text-xs-center\">\n                <div class=\"card mb-3\">\n                    <div class=\"card-body\">\n                        Grupo:\n                       <select *ngIf=\"activate; else elseBlockGroup\"\n                            class=\"form-control mr-1 p-0 text-center w-100 h-75\"\n                            [disabled]= \"!activate\"\n                            aria-label=\"Sizing example input\"\n                            aria-describedby=\"inputGroup-sizing-sm\"\n                            [(ngModel)]=\"fileSearch.search_group\">\n                                <option *ngFor=\"let group of groups\" [value]=\"group.id\">\n                                    {{group.name}}\n                                </option>\n                        </select>\n\n                        <ng-template #elseBlockGroup>\n                            <select\n                            class=\"form-control mr-1 p-0 text-center w-100 h-75\"\n                            [disabled]= \"!activate\"\n                            aria-label=\"Sizing example input\"\n                            aria-describedby=\"inputGroup-sizing-sm\"\n                            [(ngModel)]=\"fileSearch.search_group\">\n                                <option *ngFor=\"let group of groups\" [value]=\"group.name\">\n                                    {{group.name}}\n                                </option>\n                        </select>\n                        </ng-template>\n\n                       </div>\n                </div>\n            </div>\n           <div class=\"col-xl-12 text-xs-center w100\">\n                <div class=\"card mb-3\">\n                    <div class=\"card-body\">\n                        Referencia:\n                        <textarea class=\"card-body w-100\"\n                            [(ngModel)]=\"fileSearch.search_concept\"\n                            rows=\"3\"\n                            id=\"concept\"\n                            [disabled]= \"!activate\">\n                        </textarea>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n";
      /***/
    },

    /***/
    "RjaN":
    /*!**********************************************************************!*\
      !*** ./src/app/layout/Files/create-exp/create-exp-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: createExpRoutingModule */

    /***/
    function RjaN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createExpRoutingModule", function () {
        return createExpRoutingModule;
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


      var _create_exp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-exp.component */
      "e2Fr");

      var routes = [{
        path: '',
        component: _create_exp_component__WEBPACK_IMPORTED_MODULE_3__["CreateExpComponent"]
      }];

      var createExpRoutingModule = function createExpRoutingModule() {
        _classCallCheck(this, createExpRoutingModule);
      };

      createExpRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], createExpRoutingModule);
      /***/
    },

    /***/
    "Z5YO":
    /*!******************************************************************!*\
      !*** ./src/app/layout/Files/create-exp/create-exp.component.css ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function Z5YO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZXhwLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "e2Fr":
    /*!*****************************************************************!*\
      !*** ./src/app/layout/Files/create-exp/create-exp.component.ts ***!
      \*****************************************************************/

    /*! exports provided: CreateExpComponent */

    /***/
    function e2Fr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateExpComponent", function () {
        return CreateExpComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_create_exp_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./create-exp.component.html */
      "0DXs");
      /* harmony import */


      var _create_exp_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create-exp.component.css */
      "Z5YO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../db.service */
      "nA5i");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../data.service */
      "R7Hv");

      var CreateExpComponent = /*#__PURE__*/function () {
        function CreateExpComponent(DB, router, DATA) {
          _classCallCheck(this, CreateExpComponent);

          this.DB = DB;
          this.router = router;
          this.DATA = DATA;
          this.page = "http://localhost:8000/api/files/";
          this.fileSearch = {
            search_id: "",
            search_dependence_number: "",
            search_number: "",
            search_final_number: "",
            search_initiator: "",
            search_concept: "",
            search_group: "",
            search_status: 0,
            search_user_id: localStorage.getItem('id'),
            page: 1,
            totPage: 0,
            perPage: 25
          };
          this.alerts = [];
          this.alerts = this.DB.alerts;
        }

        _createClass(CreateExpComponent, [{
          key: "handleKeyboardEvent",
          value: function handleKeyboardEvent(event) {
            switch (event.key) {
              case 'Enter':
                if (!this.firstSearch) {
                  this.search();
                  this.changeFocus(4);
                  break;
                }

                if (this.empty && !this.firstSearch) {
                  this.saveExp();
                  console.log("vaaa a save");
                }

                break;

              case "Escape":
                this.router.navigate(['/listExp']);
                break;

              default:
                break;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.empty = true;
            this.firstSearch = false;
            this.activate = false;
            this.DB.Agrupations_list().subscribe(function (data) {
              _this.groups = data;
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.N1.nativeElement.focus();
          }
        }, {
          key: "search",
          value: function search() {
            var _this2 = this;

            if (this.fileSearch.search_dependence_number.length != 5 || this.fileSearch.search_number.length != 7 || this.fileSearch.search_final_number.length != 1) {
              this.DB.alerts.push({
                id: 1,
                type: 'danger',
                message: "El numero ingresado es incorrecto"
              });
            } else {
              var validate = {
                search_dependence_number: this.fileSearch.search_dependence_number,
                search_central_number: this.fileSearch.search_number,
                search_final_number: this.fileSearch.search_final_number
              };
              console.log(this.fileSearch);
              this.DB.File_validation_create(validate).subscribe(function (data) {
                _this2.aux = data;

                if (_this2.aux.total == 0) {
                  _this2.empty = true;
                  _this2.fileSearch.search_id = "";
                  _this2.fileSearch.search_initiator = "";
                  _this2.fileSearch.search_concept = "";
                  _this2.fileSearch.search_group = "";
                  _this2.fileSearch.search_status = 1;
                } else {
                  _this2.fileSearch.search_id = _this2.aux.data[0].id;
                  _this2.fileSearch.search_dependence_number = _this2.aux.data[0].dependence_number;
                  _this2.fileSearch.search_number = _this2.aux.data[0].central_number;
                  _this2.fileSearch.search_final_number = _this2.aux.data[0].final_number;
                  _this2.fileSearch.search_initiator = _this2.aux.data[0].initiator;
                  _this2.fileSearch.search_concept = _this2.aux.data[0].concept;
                  _this2.fileSearch.search_group = _this2.aux.data[0].agrupation.name;
                  _this2.fileSearch.search_status = _this2.aux.data[0].status;
                  _this2.empty = false;
                }

                _this2.firstSearch = true;

                if (_this2.firstSearch && _this2.empty) {
                  _this2.activate = true;
                } else {
                  _this2.activate = false;
                }

                _this2.changeFocus(4);
              });
            }
          }
        }, {
          key: "saveExp",
          value: function saveExp() {
            var _this3 = this;

            var new_file = {
              'dependence_number': this.fileSearch.search_dependence_number,
              'central_number': this.fileSearch.search_number,
              'final_number': this.fileSearch.search_final_number,
              'initiator': this.fileSearch.search_initiator,
              'concept': this.fileSearch.search_concept,
              'status': this.fileSearch.search_status,
              'site_id': this.fileSearch.search_user_id,
              'agrupation_id': this.fileSearch.search_group,
              'user_id': this.fileSearch.search_user_id
            };
            this.DB.File_create(new_file).subscribe({
              next: function next(data) {
                _this3.DATA.file = data;
                _this3.DATA.File_id = _this3.DATA.file.id;

                _this3.DB.alerts.push({
                  id: 1,
                  type: 'success',
                  message: "Expediente Ingresado"
                });

                _this3.router.navigate(['/passes']);
              },
              error: function error(_error) {
                console.log(_error);

                _this3.DB.alerts.push({
                  id: 1,
                  type: 'danger',
                  message: _error.menssage
                });

                _this3.router.navigate(['/listExp']);
              }
            });
          }
        }, {
          key: "see_passe",
          value: function see_passe(id_file) {
            this.DATA.file = this.aux.data.filter(function (x) {
              return x.id == id_file;
            });
          }
        }, {
          key: "changeFocus",
          value: function changeFocus(n) {
            if (n === 1 && this.fileSearch.search_dependence_number.length === 5) {
              this.N2.nativeElement.focus();
            }

            if (n === 2 && this.fileSearch.search_number.length === 7) {
              this.N3.nativeElement.focus();
            }

            if (n === 3 && this.fileSearch.search_final_number.length === 1) {
              this.BSearch.nativeElement.focus();
            }

            if (n === 4 && this.empty) {
              this.Init.nativeElement.focus();
            } else {
              this.SeePasses.nativeElement.focus();
            }
          }
        }, {
          key: "closeAlert",
          value: function closeAlert(alert) {
            var index = this.alerts.indexOf(alert);
            this.alerts.splice(index, 1);
          }
        }]);

        return CreateExpComponent;
      }();

      CreateExpComponent.ctorParameters = function () {
        return [{
          type: _db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }];
      };

      CreateExpComponent.propDecorators = {
        N1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['N1']
        }],
        N2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['N2']
        }],
        N3: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['N3']
        }],
        BSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['BSearch']
        }],
        Init: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['Init']
        }],
        SeePasses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['SeePasses']
        }],
        handleKeyboardEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:keyup', ['$event']]
        }]
      };
      CreateExpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-exp',
        template: _raw_loader_create_exp_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_exp_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])], CreateExpComponent);
      /***/
    },

    /***/
    "x8ij":
    /*!**************************************************************!*\
      !*** ./src/app/layout/Files/create-exp/create-exp.module.ts ***!
      \**************************************************************/

    /*! exports provided: CreateexpModule */

    /***/
    function x8ij(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateexpModule", function () {
        return CreateexpModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared */
      "M0ag");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _create_exp_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-exp-routing.module */
      "RjaN");
      /* harmony import */


      var _create_exp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./create-exp.component */
      "e2Fr");

      var CreateexpModule = function CreateexpModule() {
        _classCallCheck(this, CreateexpModule);
      };

      CreateexpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _create_exp_routing_module__WEBPACK_IMPORTED_MODULE_6__["createExpRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        declarations: [_create_exp_component__WEBPACK_IMPORTED_MODULE_7__["CreateExpComponent"]]
      })], CreateexpModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=Files-create-exp-create-exp-module-es5.js.map