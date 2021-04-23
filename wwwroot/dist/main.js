(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _core_controllers_tax_calculator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/controllers/tax-calculator.component */ "./src/app/core/controllers/tax-calculator.component.ts");
/* harmony import */ var _core_controllers_hire_adam_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/controllers/hire-adam.component */ "./src/app/core/controllers/hire-adam.component.ts");







const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home/tax-calculator' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        children: [
            { path: 'tax-calculator', component: _core_controllers_tax_calculator_component__WEBPACK_IMPORTED_MODULE_3__["TaxCalculatorComponent"] },
            { path: 'hire-adam', component: _core_controllers_hire_adam_component__WEBPACK_IMPORTED_MODULE_4__["HireAdamComponent"] }
        ]
    },
    { path: '**', redirectTo: '/home' }
];
class AppRoutingModule {
}
AppRoutingModule.components = [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]];
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
    <router-outlet></router-outlet>
  `
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"].components
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/controllers/hire-adam.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/controllers/hire-adam.component.ts ***!
  \*********************************************************/
/*! exports provided: HireAdamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireAdamComponent", function() { return HireAdamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HireAdamComponent {
    constructor() {
        this.whyHireAdam = "He would be a great choice. Don't think about it.";
    }
    ngOnInit() {
    }
}
HireAdamComponent.ɵfac = function HireAdamComponent_Factory(t) { return new (t || HireAdamComponent)(); };
HireAdamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HireAdamComponent, selectors: [["hire-adam"]], decls: 4, vars: 1, consts: [[1, "route-component"], [1, "hire-adam-message"]], template: function HireAdamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.whyHireAdam);
    } }, styles: [".hire-adam-message[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  font-size: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jc3MvaGlyZS1hZGFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2Nzcy9oaXJlLWFkYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXJlLWFkYW0tbWVzc2FnZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HireAdamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'hire-adam',
                templateUrl: '../templates/hire-adam.component.html',
                styleUrls: ['../css/hire-adam.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/controllers/tax-calculator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/controllers/tax-calculator.component.ts ***!
  \**************************************************************/
/*! exports provided: TaxCalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxCalculatorComponent", function() { return TaxCalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_models_tax_calculation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/models/tax-calculation */ "./src/app/core/models/tax-calculation.ts");
/* harmony import */ var _core_services_tax_calculator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/tax-calculator.service */ "./src/app/core/services/tax-calculator.service.ts");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/core/services/data.service.ts");





class TaxCalculatorComponent {
    constructor(taxCalculatorService, dataService) {
        this.taxCalculatorService = taxCalculatorService;
        this.dataService = dataService;
        this.directions = "Insert your annual USD income and zip code to calculate your taxes";
        this.loadingMessage = "";
        this.errorMessage = "An error occured";
        this.noDataMessage = "Error - No Data";
        this.income = 110000;
        this.zipCode = 77386;
        this.taxCalculation = new _core_models_tax_calculation__WEBPACK_IMPORTED_MODULE_1__["TaxCalculation"]();
    }
    ngOnInit() {
    }
    getCalculatedTax() {
        this.loadingMessage = "Calculating...";
        try {
            this.income = Number(document.getElementById('incomeInput').value);
            this.zipCode = Number(document.getElementById('zipCodeInput').value);
            this.taxCalculatorService.getCalculatedTax(this.income, this.zipCode).subscribe((data) => {
                if (data) {
                    this.loadingMessage = "";
                    this.taxCalculation = data;
                }
                else {
                    this.loadingMessage = this.noDataMessage;
                }
            }, error => { this.loadingMessage = this.errorMessage; });
        }
        catch (e) {
            this.loadingMessage = "Bad Input";
        }
    }
    isError() {
        if (this.loadingMessage) {
            let index = this.loadingMessage.toLowerCase().indexOf("error");
            if (index > -1) {
                return true;
            }
        }
        return false;
    }
}
TaxCalculatorComponent.ɵfac = function TaxCalculatorComponent_Factory(t) { return new (t || TaxCalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_tax_calculator_service__WEBPACK_IMPORTED_MODULE_2__["TaxCalculatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
TaxCalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaxCalculatorComponent, selectors: [["tax-calculator"]], decls: 37, vars: 5, consts: [[1, "route-component"], [1, "directions"], [1, "tax-tool-container"], [1, "tax-tool", "default-shadow"], [1, "tool-header"], [1, "tool-body"], [1, "input-group"], ["for", "income"], ["id", "incomeInput", "name", "income", "type", "number", "placeholder", "ex: 110000", 1, "tool-input"], ["for", "zipCode"], ["id", "zipCodeInput", "name", "zipCode", "type", "number", "placeholder", "ex: 77386", 1, "tool-input"], [1, "input-group", "button"], [1, "default-shadow", 3, "click"], [1, "tool-footer"], [1, "calculation-container"], [1, "loading-message"]], template: function TaxCalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Annual Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaxCalculatorComponent_Template_button_click_16_listener() { return ctx.getCalculatedTax(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Calculate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Formula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.directions, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.taxCalculation.formula);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("USD: $" + ctx.taxCalculation.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("USD: $" + (ctx.taxCalculation.value + (ctx.income ? ctx.income : 0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loadingMessage);
    } }, styles: ["p[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  margin: 0px;\r\n}\r\n\r\n.directions[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.tax-tool-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n\r\n.tax-tool[_ngcontent-%COMP%] {\r\n  color: #005cb9;\r\n  background-color: white;\r\n  padding: 30px 10px 30px 10px;\r\n  height: 570px;\r\n  min-width: 300px;\r\n  max-width: 500px;\r\n  width: 30vw;\r\n  border-radius: 8px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.tax-tool[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n  width: 100%;\r\n  padding-left: 50px;\r\n  padding-right: 50px;\r\n}\r\n\r\n.tax-tool[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .tax-tool[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.tax-tool[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  background-color: #005cb9;\r\n  color: white;\r\n  font-size: 24px;\r\n  padding: 10px;\r\n  width: 100%;\r\n  line-height: 0px;\r\n  border-radius: 8px;\r\n  border: none;\r\n  outline: none;\r\n  box-shadow: 0px 2px 4px black;\r\n}\r\n\r\n.tax-tool[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: none;\r\n  color: #c1c1c1;\r\n}\r\n\r\n.tool-footer[_ngcontent-%COMP%] {\r\n  height: 10vh;\r\n  min-height: 95px;\r\n  max-height: 130px;\r\n  border-top: 1px solid #a8a8a8;\r\n}\r\n\r\n.loading-message[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin-top: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\n.tax-tool[_ngcontent-%COMP%]   .tool-footer[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jc3MvdGF4LWNhbGN1bGF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUliLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2Nzcy90YXgtY2FsY3VsYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uZGlyZWN0aW9ucyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnRheC10b29sLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRheC10b29sIHtcclxuICBjb2xvcjogIzAwNWNiOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzMHB4IDEwcHggMzBweCAxMHB4O1xyXG4gIGhlaWdodDogNTcwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4udGF4LXRvb2wgLmlucHV0LWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4udGF4LXRvb2wgLmlucHV0LWdyb3VwIGxhYmVsLFxyXG4udGF4LXRvb2wgLmlucHV0LWdyb3VwIGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRheC10b29sIC5pbnB1dC1ncm91cCBidXR0b24ge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1Y2I5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaW5lLWhlaWdodDogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDRweCBibGFjaztcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggNHB4IGJsYWNrO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IGJsYWNrO1xyXG59XHJcblxyXG4udGF4LXRvb2wgLmlucHV0LWdyb3VwIGJ1dHRvbjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBjb2xvcjogI2MxYzFjMTtcclxufVxyXG5cclxuLnRvb2wtZm9vdGVyIHtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgbWluLWhlaWdodDogOTVweDtcclxuICBtYXgtaGVpZ2h0OiAxMzBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2E4YThhODtcclxufVxyXG5cclxuLmxvYWRpbmctbWVzc2FnZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50YXgtdG9vbCAudG9vbC1mb290ZXIgLmlucHV0LWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxCalculatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tax-calculator',
                templateUrl: '../templates/tax-calculator.component.html',
                styleUrls: ['../css/tax-calculator.component.css'],
            }]
    }], function () { return [{ type: _core_services_tax_calculator_service__WEBPACK_IMPORTED_MODULE_2__["TaxCalculatorService"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ensureModuleLoadedOnceGuard */ "./src/app/core/ensureModuleLoadedOnceGuard.ts");







class CoreModule extends _ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_5__["EnsureModuleLoadedOnceGuard"] {
    //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12)); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/ensureModuleLoadedOnceGuard.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/ensureModuleLoadedOnceGuard.ts ***!
  \*****************************************************/
/*! exports provided: EnsureModuleLoadedOnceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function() { return EnsureModuleLoadedOnceGuard; });
class EnsureModuleLoadedOnceGuard {
    constructor(targetModule) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
        }
    }
}


/***/ }),

/***/ "./src/app/core/models/tax-calculation.ts":
/*!************************************************!*\
  !*** ./src/app/core/models/tax-calculation.ts ***!
  \************************************************/
/*! exports provided: TaxCalculation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxCalculation", function() { return TaxCalculation; });
class TaxCalculation {
    constructor() {
        this.formula = "Default Formula";
        this.value = 1337;
    }
}


/***/ }),

/***/ "./src/app/core/services/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class DataService {
    constructor(http) {
        this.http = http;
        this.url = '/api/messages';
    }
    getMessage() {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res['data']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.error('Server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errMessage);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error || 'Server error');
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/tax-calculator.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/tax-calculator.service.ts ***!
  \*********************************************************/
/*! exports provided: TaxCalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxCalculatorService", function() { return TaxCalculatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class TaxCalculatorService {
    constructor(http) {
        this.http = http;
        this.url = '/api/TaxCalculator';
    }
    getCalculatedTax(income, zipCode) {
        let extendedUrl = this.url + '/GetCalculatedTax/' + income + '/' + zipCode;
        return this.http.get(extendedUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.error('Server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errMessage);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error || 'Server error');
    }
}
TaxCalculatorService.ɵfac = function TaxCalculatorService_Factory(t) { return new (t || TaxCalculatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TaxCalculatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaxCalculatorService, factory: TaxCalculatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxCalculatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/home/tax-calculator"]; };
const _c1 = function () { return ["/home/hire-adam"]; };
class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.navigate(['/home/tax-calculator']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 14, vars: 4, consts: [[1, "home", "default-shadow"], [1, "home-routes"], [1, "route"], [1, "link", 3, "routerLink"], [1, "autosoft-logo"], ["title", "", "alt", "", "src", "https://autosoftdms.com/wp-content/uploads/2020/01/as_hrz_4c_ltbg.png"], [1, "home-footer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tax Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hire Adam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Something written here that's SUPER important.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".home[_ngcontent-%COMP%] {\r\n  height: 72px;\r\n  width: 100%;\r\n  background-color: white;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0px;\r\n}\r\n\r\n.home-routes[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n  margin: 0px;\r\n  height: 72px;\r\n}\r\n\r\n.home-routes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  height: 100%;\r\n}\r\n\r\n.route[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  color: #005cb9;\r\n  border-right: 1px solid black;\r\n  height: 72px;\r\n  width: 165px;\r\n  max-width: 165px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  display: inline-block;\r\n  line-height: 72px;\r\n  font-weight: bold;\r\n}\r\n\r\n.route[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color:#005cb9;\r\n  color: white;\r\n}\r\n\r\n.autosoft-logo[_ngcontent-%COMP%] {\r\n  height: 72px;\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0px;\r\n  right: 0px;\r\n}\r\n\r\n.autosoft-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 72px;\r\n}\r\n\r\n.home-footer[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  padding: 10px;\r\n  position: fixed;\r\n  bottom: 0px;\r\n  width: 100%;\r\n}\r\n\r\n.home-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  height: 40px;\r\n  width: 100%;\r\n  color: #005cb9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xyXG4gIGhlaWdodDogNzJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMHB4O1xyXG59XHJcblxyXG4uaG9tZS1yb3V0ZXMge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBoZWlnaHQ6IDcycHg7XHJcbn1cclxuXHJcbi5ob21lLXJvdXRlcyBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnJvdXRlIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzAwNWNiOTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICBoZWlnaHQ6IDcycHg7XHJcbiAgd2lkdGg6IDE2NXB4O1xyXG4gIG1heC13aWR0aDogMTY1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDcycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yb3V0ZSBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDVjYjk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYXV0b3NvZnQtbG9nbyB7XHJcbiAgaGVpZ2h0OiA3MnB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmF1dG9zb2Z0LWxvZ28gaW1nIHtcclxuICBoZWlnaHQ6IDcycHg7XHJcbn1cclxuXHJcbi5ob21lLWZvb3RlciB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaG9tZS1mb290ZXIgcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogIzAwNWNiOTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\GunborN\Desktop\Development\Angular-ASPNET-TaxCalculator\Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map