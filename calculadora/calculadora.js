var calculadora = /** @class */ (function () {
    function calculadora(num1, num2) {
        this.numero1 = num1;
        this.numero2 = num2;
    }
    calculadora.prototype.calculo = function () {
        sum = this.numero1 + this.numero2;
        rest = this.numero1 - this.numero2;
        mult = this.numero1 * this.numero2;
        div = this.numero1 / this.numero2;
    };
    return calculadora;
}());
var calculouno = new calculadora(23, 24);
console.log(calculouno.calculo());
