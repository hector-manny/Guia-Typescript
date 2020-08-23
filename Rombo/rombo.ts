class Rombo{
     DiagonalVertical:number;
     DiagonalHorizontal:number;
     area():number{
          return this.DiagonalVertical*this.DiagonalVertical;
     };
     constructor(vertical:number,horizontal:number){
          this.DiagonalVertical =  vertical;
          this.DiagonalHorizontal = horizontal;
    
     }
}
     let RomboUno = new Rombo(20,23);

     console.log(RomboUno.area);


     