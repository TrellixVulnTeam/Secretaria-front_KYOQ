(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["control-user-profile-profile-module"], {
    /***/
    "514i":
    /*!*******************************************************************!*\
      !*** ./src/app/layout/control-user/profile/profile.component.css ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "E8iI":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/control-user/profile/profile.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function E8iI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition] class=\"login-page\">\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-4\">\n            <!-- <img class=\"user-avatar\" src=\"assets/images/logo ministerio.jpeg\" width=\"150px\" /> -->\n            <h1>Perfil Del Usuario</h1>\n            <form role=\"form\">\n                <div class=\"form-content\">\n\n                    <div class=\"form-group\">\n\n                        <p *ngFor=\"let alert of alerts\">\n                            <ngb-alert (close)=\"closeAlert(alert)\" [type]=\"alert.type\">{{ alert.message | translate }}</ngb-alert>\n                        </p>\n\n                        <input\n                        autofocus\n                            [placeholder]=\"'Full Name' | translate\"\n                            name=\"name\"\n                            [(ngModel)]=\"user.newName\"\n                            class=\"form-control input-underline input-lg\"\n                            type=\"text\"\n                        />\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input\n                            [placeholder]=\"'Email' | translate\"\n                            name=\"email\"\n                            [(ngModel)]=\"user.newEmail\"\n                            class=\"form-control input-underline input-lg\"\n                            type=\"text\"\n                        />\n                    </div>\n                    <div class=\"form-group\">\n                        <input\n                            [placeholder]=\"'Phone' | translate\"\n                            name=\"phone\"\n                            [(ngModel)]=\"user.newPhone\"\n                            class=\"form-control input-underline input-lg\"\n                            type=\"text\"\n                        />\n                    </div>\n                    &nbsp;\n                    &nbsp;\n                    &nbsp;\n\n                    <h4>Cambiar Contraseña</h4>\n\n                    <div class=\"form-group\">\n                        <input\n                            [placeholder]=\"'Nueva Contraseña '\"\n                            name=\"password\"\n                            [(ngModel)]=\"user.newPassword\"\n                            class=\"form-control input-underline input-lg\"\n                            type=\"password\"\n                        />\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input\n                            [placeholder]=\"'Repetir Nueva Contraseña'\"\n                            name=\"repeatpassword\"\n                            [(ngModel)]=\"repeatpassword\"\n                            class=\"form-control input-underline input-lg\"\n                            type=\"password\"\n                        />\n                    </div>\n                </div>\n                <button\n                type=\"button\" class=\"btn btn-m btn-danger\"\n                [routerLink]=\"['/dashboard']\" >\n                Volver\n            </button>\n                &nbsp;\n                <button\n                type=\"button\" class=\"btn btn-m btn-success\"\n                (click)=\"validation(content)\">\n                Guardar\n            </button>\n            </form>\n        </div>\n    </div>\n\n    <!-- //////////////////////////////////MODAL PROVIS//////////////////////////// -->\n\n    <ng-template #content let-modal>\n        <div class=\"modal-header\"  style=\"padding: 2px;\">\n          <div class=\"modal-title\" style=\"text-align: center; padding-top: 5px; width: 90%;\" id=\"modal-basic-title\">Validación</div>\n\n        </div>\n        <div class=\"modal-body\">\n\n            <div class=\"form-group\">\n                <input\n                    [placeholder]=\"'Email '\"\n                    name=\"Email\"\n                    [(ngModel)]=\"user.email\"\n                    class=\"form-control input-underline input-lg\"\n                    type=\"email\"\n                />\n            </div>\n            <div class=\"form-group\">\n                <input\n                    [placeholder]=\"'Contraseña '\"\n                    name=\"Contraseña\"\n                    [(ngModel)]=\"user.password\"\n                    class=\"form-control input-underline input-lg\"\n                    type=\"password\"\n                />\n            </div>\n\n            &nbsp;\n            <div style=\" display: flex; justify-content:space-around ;\">\n                <button\n                    style=\"font-size: small; padding: 5px;\"\n                    type=\"button\" class=\"btn btn-m btn-danger\"\n                    (click)=\"modal.dismiss('Cross click')\">\n                    Volver\n                </button>\n\n                <button\n                    style=\"font-size: small; padding-right: 5px;\"\n                    type=\"button\" class=\"btn btn-m btn-success\"\n                    (click)=\"onLoggedin()\">\n                    Guardar\n                </button>\n            </div>\n\n        </div>\n\n\n    </ng-template>\n\n</div>\n";
      /***/
    },

    /***/
    "iEVI":
    /*!***********************************************************************!*\
      !*** ./src/app/layout/control-user/profile/profile-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ProfileRoutingModule */

    /***/
    function iEVI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
        return ProfileRoutingModule;
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


      var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.component */
      "qaG/");

      var routes = [{
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
      }];

      var ProfileRoutingModule = function ProfileRoutingModule() {
        _classCallCheck(this, ProfileRoutingModule);
      };

      ProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfileRoutingModule);
      /***/
    },

    /***/
    "qaG/":
    /*!******************************************************************!*\
      !*** ./src/app/layout/control-user/profile/profile.component.ts ***!
      \******************************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function qaG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.component.html */
      "E8iI");
      /* harmony import */


      var _profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.component.css */
      "514i");
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(DB, router, modalService) {
          _classCallCheck(this, ProfileComponent);

          this.DB = DB;
          this.router = router;
          this.modalService = modalService;
          this.user = {
            email: '',
            password: '',
            newId: '',
            newName: '',
            newEmail: '',
            newPhone: '',
            newPassword: ''
          };
          this.repeatpassword = '';
          this.alerts = [];
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user = {
              newId: localStorage.getItem("id"),
              newName: localStorage.getItem("name"),
              newEmail: localStorage.getItem("email"),
              newPhone: localStorage.getItem("phone"),
              newPassword: '',
              email: '',
              password: ''
            };
          }
        }, {
          key: "validation",
          value: function validation(content) {
            console.log(this.user.newPassword.length);

            if (this.user.newPassword != this.repeatpassword) {
              this.alerts.push({
                id: 1,
                type: 'danger',
                message: "La Contraseña No Coincide"
              });
            } else {
              if (this.user.newPassword.length < 3 && this.user.newPassword.length > 1) {
                this.alerts.push({
                  id: 1,
                  type: 'danger',
                  message: "La Contraseña Debe Contener Mínimo 5 Caracteres"
                });
              } else {
                this.open(content);
              }
            }
          }
        }, {
          key: "onLoggedin",
          value: function onLoggedin() {
            var _this = this;

            var userLog;
            this.DB.login(this.user).subscribe(function (data) {
              localStorage.setItem('access_token', data.access_token);
              localStorage.setItem('token_type', data.token_type);

              _this.save();

              _this.DB.user(data.token_type, data.access_token).subscribe(function (dataUser) {
                userLog = dataUser;
                localStorage.setItem('name', userLog.name);
                localStorage.setItem('email', userLog.email);
                localStorage.setItem('role', userLog.role);
                localStorage.setItem('id', userLog.id);
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('PEAJ', userLog.PEAJ);
                localStorage.setItem('SCE', userLog.SCE);
              });

              _this.modalService.dismissAll();
            }, function (error) {
              console.error(error);
              var err = error.error.errors;

              for (var index = 0; index < _this.alerts.length; index++) {
                _this.alerts.splice(index);
              }

              if (error.error.message != undefined) {
                _this.alerts.push({
                  id: 1,
                  type: 'danger',
                  message: error.error.message
                });
              }

              if (err.email != undefined) {
                _this.alerts.push({
                  id: 2,
                  type: 'danger',
                  message: err.email[0]
                });
              }

              if (err.password != undefined) {
                _this.alerts.push({
                  id: 3,
                  type: 'danger',
                  message: err.password[0]
                });
              }
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this2 = this;

            var userLog;
            var access_token = localStorage.getItem('access_token');
            var token_type = localStorage.getItem('token_type');
            this.DB.userEdit(token_type, access_token, this.user).subscribe({
              next: function next(data) {
                userLog = data;
                localStorage.setItem('name', userLog.name);
                localStorage.setItem('email', userLog.email);
                localStorage.setItem('phone', userLog.phone);
                localStorage.setItem('id', userLog.id);
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('PEAJ', userLog.PEAJ);
                localStorage.setItem('SCE', userLog.SCE);
                console.log(data);

                _this2.alerts.push({
                  id: 1,
                  type: 'success',
                  message: "Datos actualizados correctamente"
                });

                _this2.ngOnInit();
              },
              error: function error(err) {
                console.log(err);
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
            var _this3 = this;

            this.modalService.open(content, {
              size: 'sm',
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {}, function (reason) {
              _this3.closeResult = "Dismissed ".concat(_this3.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ctorParameters = function () {
        return [{
          type: _db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }];
      };

      ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])], ProfileComponent);
      /***/
    },

    /***/
    "waom":
    /*!***************************************************************!*\
      !*** ./src/app/layout/control-user/profile/profile.module.ts ***!
      \***************************************************************/

    /*! exports provided: ProfileModule */

    /***/
    function waom(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
        return ProfileModule;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile-routing.module */
      "iEVI");
      /* harmony import */


      var _profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./profile.component */
      "qaG/");

      var ProfileModule = function ProfileModule() {
        _classCallCheck(this, ProfileModule);
      };

      ProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProfileRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselModule"]],
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]]
      })], ProfileModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=control-user-profile-profile-module-es5.js.map