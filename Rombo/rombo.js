var Rombo = /** @class */ (function () {
    function Rombo(vertical, horizontal) {
        this.DiagonalVertical = vertical;
        this.DiagonalHorizontal = horizontal;
    }
    Rombo.prototype.area = function () {
        return this.DiagonalVertical * this.DiagonalVertical;
    };
    return Rombo;
}());
var RomboUno = new Rombo(20, 23);
console.log(RomboUno.area);
