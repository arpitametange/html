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
var person = /** @class */ (function () {
    function person() {
        this.name = "arpita";
    }
    person.prototype.show = function () {
        return "jfkd";
    };
    return person;
}());
var newclass = /** @class */ (function (_super) {
    __extends(newclass, _super);
    function newclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    newclass.prototype.str = function () {
        return "arpota";
    };
    newclass.prototype.boolean = function () {
        return true;
    };
    newclass.prototype.number = function () {
        return 12;
    };
    return newclass;
}(person));
var objec = new newclass();
console.log(objec.str(), objec.boolean(), objec.number(), objec.name, objec.show());
var objec1 = new newclass();
console.log(objec.str(), objec.boolean(), objec.number(), objec.name, objec.show());
console.log("/////////////////////////");
var newclass = /** @class */ (function () {
    function newclass() {
    }
    newclass.prototype.gps = function () {
        return "gps is specied";
    };
    return newclass;
}());
var objec = new newclass();
console.log(objec.gps());
