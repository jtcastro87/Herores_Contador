import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:string[] = ['Goku','Optimus',
  'Voltrom','Superman','DrStrange']

  heroeBorrado: string = "";

  borrarHeroe(): string{

    return this.heroeBorrado = this.heroes.pop() || "";

  }

  deshacer(): void{
    this.heroes.push(this.heroeBorrado);
    this.heroeBorrado = "";
  }

}
