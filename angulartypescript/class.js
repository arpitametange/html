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
var bank = /** @class */ (function () {
    function bank(name, id) {
        this.name = name;
        this.id = id;
        this.name = name;
        this.id = id;
    }
    return bank;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        return _super.call(this, "this", 12) || this;
    }
    return child;
}(bank));
var obj = new bank("arpota", 22);
console.log(obj);
var obj2 = new child();
console.log(obj2);
