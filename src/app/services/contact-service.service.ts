import { Injectable } from '@angular/core';
import { IMiembro } from '../interfaces/miembros.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  
  /**
   * LISTADO GENERAL DE MIEMBROS
   */
  listadoMiembros:IMiembro[] = []
  
  /**
   * CUENTAS TOTALES
   */
  cuentaTotalPagada:number = 0
  cuentaTotalNoPagada:number = 0
  
  constructor(private httpClient:HttpClient) {}


  guardarMiembro(listadoMiembros:IMiembro[]){
    this.httpClient.post('https://crash-lander-app-default-rtdb.europe-west1.firebasedatabase.app/datos.json', listadoMiembros).subscribe(
      Response => {
        console.log('Se ha creado el nuevo miembro existosamente' + Response)
      },
      error => {
        console.log('Error: ' + error)
      }
    )
  }
}
  
