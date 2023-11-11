var lexi = /** @class */ (function () {
    function lexi(age) {
        var _this = this;
        this.Sha = function () {
            return _this._age = _this._age - 1;
        };
        this._age = age;
    }
    lexi.prototype.age = function () {
        return this._age;
    };
    return lexi;
}());
var object = new lexi(12);
// object.Sha()
var v = object.Sha;
v();
console.log(object.age());
