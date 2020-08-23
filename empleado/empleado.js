// @ts-ignore
var empleado = /** @class */ (function () {
    function empleado(nomb, sala) {
        this.nombre = nomb;
        this.salario = sala;
    }
    empleado.prototype.duducciones = function () {
        return "Hola " + this.nombre + "su Salario es de :" + this.salario;
    };
    ;
    return empleado;
}());
var empleadouno = new empleado("juan", 300);
console.log(empleadouno.duducciones());
