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
var Parent = /** @class */ (function () {
    function Parent(nam, id) {
        this.nam = nam;
        this.id = id;
        this.id = id;
        this.nam = nam;
    }
    return Parent;
}());
var ch = /** @class */ (function (_super) {
    __extends(ch, _super);
    function ch() {
        return _super.call(this, "arpita") || this;
    }
    return ch;
}(Parent));
var obej2 = new ch();
var obj1 = new Parent("arpita");
if (obj1.id != undefined) {
    console.log(obj1.id);
}
if (obej2.id != undefined) {
    console.log(obej2.id);
}
console.log("object2 ".concat(obej2.nam));
////default parameter
function defaut(str) {
    if (str === void 0) { str = "arpita"; }
    return str;
}
var r = defaut();
console.log(r);
