// @ts-ignore
class empleado{
    nombre:string;
    salario:number;

    duducciones():string{
     return "Hola " + this.nombre + "su Salario es de :" + this.salario;
    };
    constructor(nomb:string,sala:number) {
        this.nombre = nomb;
        this.salario = sala;
    }
}
     let empleadouno = new empleado("juan",300);

      console.log(empleadouno.duducciones());