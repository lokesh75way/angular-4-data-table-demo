webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 25px\">\r\n  <data-table-demo-1></data-table-demo-1>\r\n  <!--<data-table-demo-1-remote></data-table-demo-1-remote>-->\r\n  <data-table-demo-2></data-table-demo-2>\r\n  <data-table-demo-3></data-table-demo-3>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_4_data_table__ = __webpack_require__("../../../../angular-4-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_4_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_4_data_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo1_data_table_demo1__ = __webpack_require__("../../../../../src/app/demo1/data-table-demo1.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__demo2_data_table_demo2__ = __webpack_require__("../../../../../src/app/demo2/data-table-demo2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__demo3_data_table_demo3__ = __webpack_require__("../../../../../src/app/demo3/data-table-demo3.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__demo1_data_table_demo1_remote__ = __webpack_require__("../../../../../src/app/demo1/data-table-demo1-remote.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_5_angular_4_data_table__["DataTableModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__demo1_data_table_demo1__["a" /* DataTableDemo1 */], __WEBPACK_IMPORTED_MODULE_7__demo2_data_table_demo2__["a" /* DataTableDemo2 */], __WEBPACK_IMPORTED_MODULE_8__demo3_data_table_demo3__["a" /* DataTableDemo3 */], __WEBPACK_IMPORTED_MODULE_9__demo1_data_table_demo1_remote__["a" /* DataTableDemo1Remote */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/demo1/data-table-demo1-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    { "name": "Aaron 2Moore", "email": "Heath44@hotmail.com", "jobTitle": "Regional Configuration Producer", "active": true, "phoneNumber": "611-898-6201", "date": "2015-11-06T07:21:25.510Z" },
    { "name": "Yvonne Conroy Mrs.", "email": "Gideon9@yahoo.com", "jobTitle": "Global Mobility Orchestrator", "active": false, "phoneNumber": "115-850-0969", "date": "2014-12-20T00:48:40.276Z" },
    { "name": "Laron Padberg", "email": "Laney_Huels@hotmail.com", "jobTitle": "Senior Directives Supervisor", "active": false, "phoneNumber": "632-654-3034", "date": "2015-09-29T04:33:38.544Z" },
    { "name": "Dr. Maryam Spinka", "email": "Aletha.Labadie@hotmail.com", "jobTitle": "Dynamic Mobility Associate", "active": true, "phoneNumber": "547-345-0067", "date": "2015-09-23T01:13:39.320Z" },
    { "name": "Kiley Baumbach", "email": "Rogelio24@hotmail.com", "jobTitle": "Principal Metrics Orchestrator", "active": true, "phoneNumber": "958-524-5164", "date": "2014-12-05T23:39:27.340Z" },
    { "name": "Hollis MacGyver", "email": "Yazmin.Heidenreich97@gmail.com", "jobTitle": "Direct Markets Assistant", "active": true, "phoneNumber": "603-607-3241", "date": "2015-02-12T10:40:52.977Z" },
    { "name": "Axel McLaughlin", "email": "Deon_Heaney@gmail.com", "jobTitle": "Forward Mobility Architect", "active": false, "phoneNumber": "983-639-0705", "date": "2015-03-01T02:28:26.030Z" },
    { "name": "Ricardo Botsford", "email": "Melisa73@yahoo.com", "jobTitle": "Direct Quality Consultant", "active": true, "phoneNumber": "408-082-9480", "date": "2015-01-31T03:41:54.611Z" },
    { "name": "Corbin Funk Mrs.", "email": "Marjory.Morissette51@gmail.com", "jobTitle": "Human Configuration Manager", "active": true, "phoneNumber": "386-937-8683", "date": "2014-12-05T15:07:36.843Z" },
    { "name": "Rosalind Paucek", "email": "Ivy_Stanton@gmail.com", "jobTitle": "Future Creative Supervisor", "active": true, "phoneNumber": "977-661-7403", "date": "2015-06-10T17:42:38.644Z" },
    { "name": "Henderson Moore", "email": "Randi_Corkery@hotmail.com", "jobTitle": "Internal Accountability Director", "active": true, "phoneNumber": "078-101-6377", "date": "2015-09-26T05:14:34.913Z" },
    { "name": "Kelli Schoen", "email": "Reva.Kiehn54@yahoo.com", "jobTitle": "National Accountability Architect", "active": false, "phoneNumber": "654-591-6561", "date": "2015-05-04T06:50:37.482Z" },
    { "name": "Kenna Fritsch", "email": "Wilburn2@gmail.com", "jobTitle": "Legacy Response Administrator", "active": true, "phoneNumber": "790-480-2859", "date": "2015-10-10T23:37:05.867Z" },
    { "name": "Judge Marquardt", "email": "Letha_Champlin69@hotmail.com", "jobTitle": "Human Program Specialist", "active": true, "phoneNumber": "100-494-1787", "date": "2015-04-04T23:29:48.588Z" },
    { "name": "Kurtis Hane", "email": "Mona.Gaylord47@yahoo.com", "jobTitle": "International Optimization Director", "active": false, "phoneNumber": "008-800-2959", "date": "2014-12-04T21:09:50.722Z" },
    { "name": "Nicolette Lind", "email": "Thurman30@yahoo.com", "jobTitle": "Legacy Marketing Facilitator", "active": true, "phoneNumber": "007-908-2460", "date": "2015-06-22T08:11:57.381Z" },
    { "name": "Idella Green", "email": "Fernando_Ward@yahoo.com", "jobTitle": "Dynamic Division Orchestrator", "active": false, "phoneNumber": "147-865-1578", "date": "2015-02-12T23:00:31.283Z" },
    { "name": "Mackenzie Bartell", "email": "Price25@yahoo.com", "jobTitle": "National Directives Associate", "active": false, "phoneNumber": "235-649-0980", "date": "2015-06-24T20:21:51.356Z" },
    { "name": "Mose Kohler", "email": "Malika56@hotmail.com", "jobTitle": "Lead Implementation Executive", "active": true, "phoneNumber": "614-886-4868", "date": "2015-03-04T13:05:23.698Z" },
    { "name": "Cielo Kuphal", "email": "Jude_Terry24@gmail.com", "jobTitle": "Dynamic Division Analyst", "active": false, "phoneNumber": "590-976-7492", "date": "2015-06-02T20:52:32.664Z" },
    { "name": "Haleigh Stokes", "email": "Belle_Herman64@yahoo.com", "jobTitle": "Global Intranet Executive", "active": false, "phoneNumber": "418-255-9365", "date": "2015-04-10T00:32:10.283Z" },
    { "name": "Tyrese Walter", "email": "Garland.Veum52@hotmail.com", "jobTitle": "Senior Web Liason", "active": false, "phoneNumber": "041-555-9831", "date": "2015-08-18T20:05:08.839Z" },
    { "name": "Barney Shields", "email": "Anika27@gmail.com", "jobTitle": "District Web Administrator", "active": true, "phoneNumber": "379-438-0217", "date": "2015-06-01T09:28:46.778Z" },
    { "name": "Favian Abbott Miss", "email": "Palma_Little@hotmail.com", "jobTitle": "Lead Implementation Facilitator", "active": false, "phoneNumber": "642-808-5400", "date": "2015-08-09T07:38:06.588Z" },
    { "name": "Carissa Kunze", "email": "Merl_Frami@yahoo.com", "jobTitle": "Regional Division Technician", "active": true, "phoneNumber": "949-983-0342", "date": "2015-11-05T08:09:09.463Z" }
]);
//# sourceMappingURL=data-table-demo1-data.js.map

/***/ }),

/***/ "../../../../../src/app/demo1/data-table-demo1-remote-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BASE_URL = 'http://localhost:3000';
function paramsToQueryString(params) {
    var result = [];
    if (params.offset != null) {
        result.push(['_start', params.offset]);
    }
    if (params.limit != null) {
        result.push(['_limit', params.limit]);
    }
    if (params.sortBy != null) {
        result.push(['_sort', params.sortBy]);
    }
    if (params.sortAsc != null) {
        result.push(['_order', params.sortAsc ? 'ASC' : 'DESC']);
    }
    return result.map(function (param) { return param.join('='); }).join('&');
}
var RemoteService = (function () {
    function RemoteService(http) {
        this.http = http;
    }
    RemoteService.prototype.query = function (params) {
        return this.http.get(BASE_URL + '/people?' + paramsToQueryString(params)).toPromise()
            .then(function (resp) { return ({
            items: resp.json(),
            count: Number(resp.headers.get('X-Total-Count'))
        }); });
    };
    return RemoteService;
}());
RemoteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], RemoteService);

var _a;
//# sourceMappingURL=data-table-demo1-remote-service.js.map

/***/ }),

/***/ "../../../../../src/app/demo1/data-table-demo1-remote.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_table_demo1_remote_service__ = __webpack_require__("../../../../../src/app/demo1/data-table-demo1-remote-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableDemo1Remote; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableDemo1Remote = (function () {
    function DataTableDemo1Remote(remoteService) {
        this.remoteService = remoteService;
        this.items = [];
        this.itemCount = 0;
    }
    DataTableDemo1Remote.prototype.reloadItems = function (params) {
        var _this = this;
        this.remoteService.query(params).then(function (result) {
            _this.items = result.items;
            _this.itemCount = result.count;
        });
    };
    return DataTableDemo1Remote;
}());
DataTableDemo1Remote = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'data-table-demo-1-remote',
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_table_demo1_remote_service__["a" /* RemoteService */]],
        template: __webpack_require__("../../../../../src/app/demo1/data-table-demo1.html"),
        styles: [__webpack_require__("../../../../../src/app/demo1/data-table-demo1.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_table_demo1_remote_service__["a" /* RemoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_table_demo1_remote_service__["a" /* RemoteService */]) === "function" && _a || Object])
], DataTableDemo1Remote);

var _a;
//# sourceMappingURL=data-table-demo1-remote.js.map

/***/ }),

/***/ "../../../../../src/app/demo1/data-table-demo1.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n:host /deep/ .data-table-row {\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo1/data-table-demo1.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: auto; max-width: 1000px; margin-bottom: 50px;\">\r\n    <data-table id=\"persons-grid\"\r\n        headerTitle=\"Employees\"\r\n        [items]=\"items\"\r\n        [itemCount]=\"itemCount\"\r\n        (reload)=\"reloadItems($event)\"\r\n\r\n        (rowClick)=\"rowClick($event)\"\r\n        (rowDoubleClick)=\"rowDoubleClick($event)\"\r\n        [rowTooltip]=\"rowTooltip\"\r\n        >\r\n        <data-table-column\r\n            [property]=\"'name'\"\r\n            [header]=\"'Name'\"\r\n            [sortable]=\"true\"\r\n            [resizable]=\"true\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'date'\"\r\n            [header]=\"'Date'\"\r\n            [sortable]=\"true\">\r\n            <ng-template #dataTableCell let-item=\"item\">\r\n                <span>{{item.date | date:'yyyy-MM-dd'}}</span>\r\n            </ng-template>\r\n        </data-table-column>\r\n        <data-table-column\r\n            property=\"phoneNumber\"\r\n            header=\"Phone number\"\r\n            width=\"150px\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'jobTitle'\"\r\n            [header]=\"'Job title'\"\r\n            [visible]=\"false\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'active'\"\r\n            [header]=\"'Active'\"\r\n            [width]=\"100\"\r\n            [resizable]=\"true\">\r\n            <ng-template #dataTableHeader let-item=\"item\">\r\n                <span style=\"color: rgb(232, 0, 0)\">Active</span>\r\n            </ng-template>\r\n            <ng-template #dataTableCell let-item=\"item\">\r\n                <span style=\"color: grey\">\r\n                <span class=\"glyphicon glyphicon-ok\" *ngIf=\"item.active\"></span>\r\n                <span class=\"glyphicon glyphicon-remove\" *ngIf=\"!item.active\"></span>\r\n                </span>\r\n            </ng-template>\r\n        </data-table-column>\r\n    </data-table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo1/data-table-demo1.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__ = __webpack_require__("../../../../angular-4-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_table_demo1_data__ = __webpack_require__("../../../../../src/app/demo1/data-table-demo1-data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableDemo1; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataTableDemo1 = (function () {
    function DataTableDemo1() {
        var _this = this;
        this.itemResource = new __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__["DataTableResource"](__WEBPACK_IMPORTED_MODULE_2__data_table_demo1_data__["a" /* default */]);
        this.items = [];
        this.itemCount = 0;
        this.itemResource.count().then(function (count) { return _this.itemCount = count; });
    }
    DataTableDemo1.prototype.reloadItems = function (params) {
        var _this = this;
        this.itemResource.query(params).then(function (items) { return _this.items = items; });
    };
    // special properties:
    DataTableDemo1.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    };
    DataTableDemo1.prototype.rowDoubleClick = function (rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    };
    DataTableDemo1.prototype.rowTooltip = function (item) { return item.jobTitle; };
    return DataTableDemo1;
}());
DataTableDemo1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'data-table-demo-1',
        providers: [],
        template: __webpack_require__("../../../../../src/app/demo1/data-table-demo1.html"),
        styles: [__webpack_require__("../../../../../src/app/demo1/data-table-demo1.css")]
    }),
    __metadata("design:paramtypes", [])
], DataTableDemo1);

//# sourceMappingURL=data-table-demo1.js.map

/***/ }),

/***/ "../../../../../src/app/demo2/data-table-demo2-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cars; });
var cars = [
    { year: 1997, maker: 'Ford', model: 'E350', desc: 'ac, abs, moon', price: 3000.00 },
    { year: 1999, maker: 'Chevy', model: 'Venture "Extended Edition"', price: 4900.00 },
    { year: 1999, maker: 'Checy', model: 'Venture "Extended Edition, Very Large"', price: 5000.00 },
    { year: 1996, maker: 'Jeep', model: 'Grand Cherokee', desc: 'air, moon roof, loaded', price: 4799.00 }
];
//# sourceMappingURL=data-table-demo2-data.js.map

/***/ }),

/***/ "../../../../../src/app/demo2/data-table-demo2.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: auto; max-width: 600px;\">\r\n  <div>\r\n    <span>Highlight after: </span>\r\n    <input type=\"number\" [(ngModel)]=\"yearLimit\" class=\"form-control input-sm\" style=\"display: inline-block; width: 100px\">\r\n  </div>\r\n  <data-table\r\n    [items]=\"cars\"\r\n    [itemCount]=\"carCount\"\r\n    (reload)=\"reloadCars($event)\"\r\n\r\n    [pagination]=\"false\"\r\n    [indexColumn]=\"false\"\r\n    [selectColumn]=\"true\"\r\n    [multiSelect]=\"true\"\r\n    [rowColors]=\"rowColors\"\r\n    >\r\n    <data-table-column\r\n      property=\"year\"\r\n      header=\"Year\"\r\n      sortable=\"true\">\r\n      <ng-template #dataTableCell let-item=\"item\">\r\n        <input type=\"number\" [(ngModel)]=\"item.year\" class=\"form-control input-sm\" style=\"width: 75px\"/>\r\n      </ng-template>\r\n    </data-table-column>\r\n    <data-table-column\r\n      property=\"maker\"\r\n      header=\"Maker\">\r\n    </data-table-column>\r\n    <data-table-column\r\n      property=\"model\"\r\n      header=\"Model\">\r\n    </data-table-column>\r\n    <data-table-column\r\n      property=\"price\"\r\n      header=\"Price ($)\">\r\n    </data-table-column>\r\n    <data-table-column\r\n      header=\"Actions\">\r\n      <ng-template #dataTableHeader let-item=\"item\">\r\n        <i>Actions</i>\r\n      </ng-template>\r\n      <ng-template #dataTableCell let-item=\"item\">\r\n        <button (click)=\"carClicked(item)\" class=\"btn btn-sm btn-default\">Buy</button>\r\n      </ng-template>\r\n    </data-table-column>\r\n  </data-table>\r\n  <div>\r\n    <div>\r\n        <b>Selected:</b>\r\n        <span [textContent]=\"carsTable.selectedRows.length\"></span>\r\n    </div>\r\n    <div *ngFor=\"let selected of carsTable.selectedRows\">\r\n        <span [textContent]=\"selected.item.model\"></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo2/data-table-demo2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__ = __webpack_require__("../../../../angular-4-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_table_demo2_data__ = __webpack_require__("../../../../../src/app/demo2/data-table-demo2-data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableDemo2; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataTableDemo2 = (function () {
    function DataTableDemo2() {
        var _this = this;
        this.carResource = new __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__["DataTableResource"](__WEBPACK_IMPORTED_MODULE_2__data_table_demo2_data__["a" /* cars */]);
        this.cars = [];
        this.carCount = 0;
        this.yearLimit = 1999;
        this.rowColors = this.rowColors.bind(this);
        this.carResource.count().then(function (count) { return _this.carCount = count; });
    }
    DataTableDemo2.prototype.reloadCars = function (params) {
        var _this = this;
        this.carResource.query(params).then(function (cars) { return _this.cars = cars; });
    };
    // custom features:
    DataTableDemo2.prototype.carClicked = function (car) {
        alert(car.model);
    };
    DataTableDemo2.prototype.rowColors = function (car) {
        if (car.year >= this.yearLimit)
            return 'rgb(255, 255, 197)';
    };
    return DataTableDemo2;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__["DataTable"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__["DataTable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__["DataTable"]) === "function" && _a || Object)
], DataTableDemo2.prototype, "carsTable", void 0);
DataTableDemo2 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'data-table-demo-2',
        template: __webpack_require__("../../../../../src/app/demo2/data-table-demo2.html")
    }),
    __metadata("design:paramtypes", [])
], DataTableDemo2);

var _a;
//# sourceMappingURL=data-table-demo2.js.map

/***/ }),

/***/ "../../../../../src/app/demo3/data-table-demo3-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return films; });
var films = [
    { title: 'The Shawshank Redemption', year: 1994, rating: 9.2, director: 'Frank Darabont', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.' },
    { title: 'The Godfather', year: 1972, rating: 9.2, director: 'Francis Ford Coppola', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.' },
    { title: 'The Godfather: Part II', year: 1974, rating: 9.0, director: 'Francis Ford Coppola', description: 'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.' },
    { title: 'The Dark Knight', year: 2008, rating: 8.9, director: 'Christopher Nolan', description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.' },
    { title: 'Pulp Fiction', year: 1994, rating: 8.9, director: 'Quentin Tarantino', description: 'The lives of two mob hit men, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.' },
    { title: 'Schindler\'s List', year: 1993, rating: 8.9, director: 'Stephen Spielberg', description: 'In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.' },
    { title: '12 Angry Men', year: 1957, rating: 8.9, director: 'Sidney Lumet', description: 'A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.' },
    { title: 'The Good, the Bad and the Ugly', year: 1966, rating: 8.9, director: 'Sergio Leone', description: 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.' },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003, rating: 8.9, director: 'Peter Jackson', description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.' },
    { title: 'Fight Club', year: 1999, rating: 8.8, director: 'David Fincher', description: 'An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more...' },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, director: 'Peter Jackson', description: 'A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.' },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980, rating: 8.7, director: 'Irvin Kershner', description: 'After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.' },
    { title: 'Forest Gump', year: 1994, rating: 8.7, director: 'Stephen Spielberg', description: 'Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.' },
    { title: 'Inception', year: 2010, rating: 8.7, director: 'Christopher Nolan', description: 'A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.' },
];
//# sourceMappingURL=data-table-demo3-data.js.map

/***/ }),

/***/ "../../../../../src/app/demo3/data-table-demo3.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n:host /deep/ .index-column,\r\n:host /deep/ .index-column-header {\r\n    text-align: right;\r\n}\r\n\r\n:host /deep/ .data-table .data-table-row.selected {\r\n    background-color: #E4EDF9;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo3/data-table-demo3.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: auto; max-width: 1000px; margin-top:50px\">\r\n    <data-table id=\"films-grid\"\r\n        headerTitle=\"Films\"\r\n        [items]=\"films\"\r\n        [itemCount]=\"filmCount\"\r\n        (reload)=\"reloadFilms($event)\"\r\n\r\n        [limit]=\"8\"\r\n        [sortBy]=\"'rating'\"\r\n        [sortAsc]=\"false\"\r\n\r\n        [selectColumn]=\"true\"\r\n        [multiSelect]=\"false\"\r\n        [substituteRows]=\"false\"\r\n        [expandableRows]=\"true\"\r\n        [translations]=\"translations\"\r\n        [indexColumnHeader]=\"'#'\"\r\n        [selectOnRowClick]=\"true\"\r\n        >\r\n        <ng-template #dataTableExpand let-item=\"item\">\r\n            <div [textContent]=\"item.description\" style=\"padding: 5px; color: gray\"></div>\r\n        </ng-template>\r\n        <data-table-column\r\n            [property]=\"'title'\"\r\n            [header]=\"'Title'\"\r\n            [sortable]=\"true\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'year'\"\r\n            [header]=\"'Release year'\"\r\n            [sortable]=\"true\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'rating'\"\r\n            [header]=\"'Rating'\"\r\n            [sortable]=\"true\"\r\n            [cellColors]=\"cellColor\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'director'\"\r\n            [header]=\"'Director'\">\r\n        </data-table-column>\r\n    </data-table>\r\n    <div style=\"margin-top: 10px\">\r\n        <b>Selected:</b>\r\n        <span *ngIf=\"filmsTable.selectedRow == null\"><i>No item selected</i></span>\r\n        <span [textContent]=\"filmsTable.selectedRow && filmsTable.selectedRow.item.title\"></span>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo3/data-table-demo3.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__ = __webpack_require__("../../../../angular-4-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_table_demo3_data__ = __webpack_require__("../../../../../src/app/demo3/data-table-demo3-data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableDemo3; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataTableDemo3 = (function () {
    function DataTableDemo3() {
        var _this = this;
        this.filmResource = new __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__["DataTableResource"](__WEBPACK_IMPORTED_MODULE_2__data_table_demo3_data__["a" /* films */]);
        this.films = [];
        this.filmCount = 0;
        // special params:
        this.translations = {
            indexColumn: 'Index column',
            expandColumn: 'Expand column',
            selectColumn: 'Select column',
            paginationLimit: 'Max results',
            paginationRange: 'Result range'
        };
        this.filmResource.count().then(function (count) { return _this.filmCount = count; });
    }
    DataTableDemo3.prototype.reloadFilms = function (params) {
        var _this = this;
        this.filmResource.query(params).then(function (films) { return _this.films = films; });
    };
    DataTableDemo3.prototype.cellColor = function (car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
    };
    ;
    return DataTableDemo3;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__["DataTable"]),
    __metadata("design:type", Object)
], DataTableDemo3.prototype, "filmsTable", void 0);
DataTableDemo3 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'data-table-demo-3',
        template: __webpack_require__("../../../../../src/app/demo3/data-table-demo3.html"),
        styles: [__webpack_require__("../../../../../src/app/demo3/data-table-demo3.css")]
    }),
    __metadata("design:paramtypes", [])
], DataTableDemo3);

//# sourceMappingURL=data-table-demo3.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map