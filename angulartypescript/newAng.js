var bank = /** @class */ (function () {
    function bank() {
        this.n = 12;
        this.no = 13;
    }
    Object.defineProperty(bank.prototype, "nam", {
        get: function () {
            if (true) {
                return this.n;
            }
        },
        enumerable: false,
        configurable: true
    });
    return bank;
}());
var obj = new bank();
console.log(obj);
console.log(obj.nam);
