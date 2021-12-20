(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dontUse-charts-charts-module"], {
    /***/
    "0Ggm":
    /*!********************************************************!*\
      !*** ./src/app/layout/dontUse/charts/charts.module.ts ***!
      \********************************************************/

    /*! exports provided: ChartsModule */

    /***/
    function Ggm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartsModule", function () {
        return ChartsModule;
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


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared */
      "M0ag");
      /* harmony import */


      var _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./charts-routing.module */
      "7Sb+");
      /* harmony import */


      var _charts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./charts.component */
      "I93u");

      var ChartsModule = function ChartsModule() {
        _classCallCheck(this, ChartsModule);
      };

      ChartsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartsRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
        declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_6__["ChartsComponent"]]
      })], ChartsModule);
      /***/
    },

    /***/
    "7Sb+":
    /*!****************************************************************!*\
      !*** ./src/app/layout/dontUse/charts/charts-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: ChartsRoutingModule */

    /***/
    function Sb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartsRoutingModule", function () {
        return ChartsRoutingModule;
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


      var _charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./charts.component */
      "I93u");

      var routes = [{
        path: '',
        component: _charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"]
      }];

      var ChartsRoutingModule = function ChartsRoutingModule() {
        _classCallCheck(this, ChartsRoutingModule);
      };

      ChartsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChartsRoutingModule);
      /***/
    },

    /***/
    "I93u":
    /*!***********************************************************!*\
      !*** ./src/app/layout/dontUse/charts/charts.component.ts ***!
      \***********************************************************/

    /*! exports provided: ChartsComponent */

    /***/
    function I93u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartsComponent", function () {
        return ChartsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_charts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./charts.component.html */
      "J84J");
      /* harmony import */


      var _charts_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./charts.component.scss */
      "jokD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../router.animations */
      "ZZ88");

      var ChartsComponent = /*#__PURE__*/function () {
        function ChartsComponent() {
          _classCallCheck(this, ChartsComponent);

          // bar chart
          this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
          };
          this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
          this.barChartData = [{
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Series A'
          }, {
            data: [28, 48, 40, 19, 86, 27, 90],
            label: 'Series B'
          }]; // Doughnut

          this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
          this.doughnutChartData = [350, 450, 100]; // Radar

          this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
          this.radarChartData = [{
            data: [65, 59, 90, 81, 56, 55, 40],
            label: 'Series A'
          }, {
            data: [28, 48, 40, 19, 96, 27, 100],
            label: 'Series B'
          }]; // Pie

          this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
          this.pieChartData = [300, 500, 100]; // PolarArea

          this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
          this.polarAreaChartData = [300, 500, 100, 40, 120]; // lineChart

          this.lineChartData = [{
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Series A'
          }, {
            data: [28, 48, 40, 19, 86, 27, 90],
            label: 'Series B'
          }, {
            data: [18, 48, 77, 9, 100, 27, 40],
            label: 'Series C'
          }];
          this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
          this.lineChartOptions = {
            responsive: true
          };
          this.lineChartColors = [{
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
          }, {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
          }, {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
          }];
        } // events


        _createClass(ChartsComponent, [{
          key: "chartClicked",
          value: function chartClicked(e) {// console.log(e);
          }
        }, {
          key: "chartHovered",
          value: function chartHovered(e) {// console.log(e);
          }
        }, {
          key: "randomize",
          value: function randomize() {
            // Only Change 3 values
            var data = [Math.round(Math.random() * 100), 59, 80, Math.random() * 100, 56, Math.random() * 100, 40];
            var clone = JSON.parse(JSON.stringify(this.barChartData));
            clone[0].data = data;
            this.barChartData = clone;
            /**
             * (My guess), for Angular to recognize the change in the dataset
             * it has to change the dataset variable directly,
             * so one way around it, is to clone the data, change it and then
             * assign it;
             */
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.barChartType = 'bar';
            this.barChartLegend = true;
            this.doughnutChartType = 'doughnut';
            this.radarChartType = 'radar';
            this.pieChartType = 'pie';
            this.polarAreaLegend = true;
            this.polarAreaChartType = 'polarArea';
            this.lineChartLegend = true;
            this.lineChartType = 'line';
          }
        }]);

        return ChartsComponent;
      }();

      ChartsComponent.ctorParameters = function () {
        return [];
      };

      ChartsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-charts',
        template: _raw_loader_charts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()],
        styles: [_charts_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ChartsComponent);
      /***/
    },

    /***/
    "J84J":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dontUse/charts/charts.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function J84J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Charts'\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Bar Chart\n                </div>\n                <div class=\"card-body\">\n                    <canvas\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartHover)=\"chartHovered($event)\"\n                        [chartType]=\"barChartType\"\n                        [datasets]=\"barChartData\"\n                        [labels]=\"barChartLabels\"\n                        [legend]=\"barChartLegend\"\n                        [options]=\"barChartOptions\"\n                        baseChart\n                    >\n                    </canvas>\n                </div>\n                <div class=\"card-footer\">\n                    <button (click)=\"randomize()\" class=\"btn btn-info btn-sm\">Update</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Doughnut Chart\n                </div>\n                <div class=\"card-body\">\n                    <canvas\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartHover)=\"chartHovered($event)\"\n                        [chartType]=\"doughnutChartType\"\n                        [data]=\"doughnutChartData\"\n                        [labels]=\"doughnutChartLabels\"\n                        baseChart\n                        height=\"180px\"\n                    >\n                    </canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Radar Chart\n                </div>\n                <div class=\"card-body\">\n                    <canvas\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartHover)=\"chartHovered($event)\"\n                        [chartType]=\"radarChartType\"\n                        [datasets]=\"radarChartData\"\n                        [labels]=\"radarChartLabels\"\n                        baseChart\n                        height=\"150px\"\n                    >\n                    </canvas>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Pie Chart\n                </div>\n                <div class=\"card-body\">\n                    <canvas\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartHover)=\"chartHovered($event)\"\n                        [chartType]=\"pieChartType\"\n                        [data]=\"pieChartData\"\n                        [labels]=\"pieChartLabels\"\n                        baseChart\n                        height=\"150px\"\n                    >\n                    </canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Polar Area Chart\n                </div>\n                <div class=\"card-body\">\n                    <canvas\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartHover)=\"chartHovered($event)\"\n                        [chartType]=\"polarAreaChartType\"\n                        [data]=\"polarAreaChartData\"\n                        [labels]=\"polarAreaChartLabels\"\n                        [legend]=\"polarAreaLegend\"\n                        baseChart\n                        height=\"130px\"\n                    >\n                    </canvas>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Line Chart\n                </div>\n                <div class=\"card-body\">\n                    <canvas\n                        (chartClick)=\"chartClicked($event)\"\n                        (chartHover)=\"chartHovered($event)\"\n                        [chartType]=\"lineChartType\"\n                        [colors]=\"lineChartColors\"\n                        [datasets]=\"lineChartData\"\n                        [labels]=\"lineChartLabels\"\n                        [legend]=\"lineChartLegend\"\n                        [options]=\"lineChartOptions\"\n                        baseChart\n                        height=\"130\"\n                    >\n                    </canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "jokD":
    /*!*************************************************************!*\
      !*** ./src/app/layout/dontUse/charts/charts.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function jokD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=dontUse-charts-charts-module-es5.js.map