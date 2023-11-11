"use strict";
// export function pali(arg:string):boolean{
//     return arg== arg.split("").reverse().join('')
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.pali = void 0;
function pali() {
    console.log("export function");
}
exports.pali = pali;
var Ne = /** @class */ (function () {
    function Ne() {
    }
    return Ne;
}());
var row = /** @class */ (function (_super) {
    __extends(row, _super);
    function row() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    row.prototype.namee = function () {
        console.log("kjdf");
    };
    row.prototype.id = function () {
        return 12;
    };
    return row;
}(Ne));
var object = new row();
object.namee();
console.log(object.id());
