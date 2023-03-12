import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMiembro } from '../interfaces/miembros.interface';
import { ContactServiceService } from './contact-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) { }

  guardarMiembro(miembrosToBD: IMiembro[]) {

    this.httpClient.put('https://crash-lander-app-default-rtdb.europe-west1.firebasedatabase.app/datos.json', miembrosToBD).subscribe(
      Response => {
        console.log('Se ha creado el nuevo miembro existosamente')
      },
      error => {
        console.log('Error: ' + error)
      }
    )
  }

  cargarMiembros() {
    return this.httpClient.get('https://crash-lander-app-default-rtdb.europe-west1.firebasedatabase.app/datos.json')
  }


  eliminarMiembro(indice:number) {
    let url = 'https://crash-lander-app-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json'

    this.httpClient.delete(url).subscribe(
      Response => {
        console.log('Miembro eliminado correctamente')
      },
      error => {
        console.log('Error: ' + error)
      }
    )
  }
}
