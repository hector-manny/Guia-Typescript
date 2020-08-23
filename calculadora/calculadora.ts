class calculadora{
    numero1:number;
    numero2:number;
    calculo():number{
        sum = this.numero1+this.numero2;
          rest = this.numero1-this.numero2;
           mult = this.numero1*this.numero2;
            div = this.numero1/this.numero2;
    }
    constructor(num1:number,num2:number) {
        this.numero1 = num1;
        this.numero2 = num2;
    }
}
   let calculouno = new calculadora(23, 24);
   console.log(calculouno.calculo());