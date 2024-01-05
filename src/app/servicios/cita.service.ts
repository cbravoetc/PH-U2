import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private _citas:Cita[] = [
    new Cita (1, 'La vida es como montar a caballo. Una vez que aprendes a montar, no dejas de caer.', 'Albert Einstein'),
    new Cita (2, 'La felicidad es la medida del alma en que está realizada su esencia.', 'Aristóteles'),
    new Cita (3, 'Cuanto más grande es la prueba, más glorioso es el triunfo.', 'William Shakespeare'),
    new Cita (4, 'Es mejor una verdad cruel que una ilusión agradable.', 'Edward Abbey'),
    new Cita (5, 'No hay que ir para atrás ni para darse impulso', 'Lao Tsé'),
    new Cita (6, 'Aprende a vivir y sabrás morir bien.', 'Confucio'),
    new Cita (7, 'El poder no cambia a las personas, solo revela quiénes son realmente', 'Meryl Streep'),
    new Cita (8, 'El sabio no dice nunca todo lo que piensa, pero siempre piensa todo lo que dice', 'Aristóteles'),
    new Cita (9, 'La verdadera sabiduría está en reconocer la propia ignorancia', 'Sócrates'),
    new Cita (10, 'La inspiración existe, pero tiene que encontrarte trabajando', 'Picasso'),
  ]

  constructor() {
   }

  agregarCita(cita: Cita) {
    cita.id =Date.now()
    this._citas.push(cita);
  }

  getCitas(): Cita[]  {
    console.dir(this._citas)
    return this._citas
  }

  private getIndice(cita:Cita):number {
    return this._citas.findIndex(citita => citita.id === cita.id)
  }

  deleteCita(cita:Cita) {
    const indice = this.getIndice(cita)
    if( indice >= 0) {
      this._citas.splice(indice, 1)
    }    
  }

  editar(cita:Cita) {
    const indice = this.getIndice(cita)
    if( indice >= 0) {
      this._citas[indice] = cita
    }    
  }

  getRandomCita() {
    const randomIndex = Math.floor(Math.random() * this._citas.length);
    return {
      ...this._citas[randomIndex]
    };
  }
  
}
