import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl:'./contador.component.html'
})

export class ContadorComponent{
    numero: number = 5;
    base: number = 5

    acumular(valor: number){
        if (this.numero == 5  && valor < 0)
          return;
        this.numero += valor;
        console.log("hola...")
      }

}