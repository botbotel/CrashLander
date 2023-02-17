import { Injectable } from '@angular/core';
import { IMiembro } from '../interfaces/miembros.interface';

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
  
  constructor() { }

  
  
  
  

}
