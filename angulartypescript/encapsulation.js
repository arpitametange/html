var Encap = /** @class */ (function () {
    function Encap() {
        this.name1 = "arpitaaa";
    }
    Object.defineProperty(Encap.prototype, "sho", {
        get: function () {
            return this.name1;
        },
        enumerable: false,
        configurable: true
    });
    return Encap;
}());
var obje = new Encap();
console.log(obje.sho);
