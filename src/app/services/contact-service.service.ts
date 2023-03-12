import { Injectable } from '@angular/core';
import { IMiembro } from '../interfaces/miembros.interface';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {


  miembrosToBD:IMiembro [] = []
  /**
   * CUENTAS TOTALES
   */
  cuentaTotalPagada: number = 0
  cuentaTotalNoPagada: number = 0

  constructor(private httpClient: HttpClient, private httpService:HttpServiceService) { }

  loadToBD() {
    this.httpService.guardarMiembro(this.miembrosToBD)
  }

  setMiembros(miembros: IMiembro[]) {
    this.miembrosToBD = miembros
  }

  actualizarMiembro(indice:number , nombre:IMiembro) {
    let url = 'https://crash-lander-app-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json'

    this.httpClient.put(url, nombre).subscribe(
      Response => {
        console.log('Tickets actualizados correctamente')
      },
      error => {
        console.log('Error: ' + error)
      }
    )
  }



}

