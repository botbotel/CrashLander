import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMiembro } from 'src/app/interfaces/miembros.interface';
import { CrearMiembroComponent } from 'src/app/components/crear-miembro/crear-miembro.component'


import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-miembros-page',
  templateUrl: './miembros-page.component.html',
  styleUrls: ['./miembros-page.component.scss']
})
export class MiembrosPageComponent implements OnInit {

  /**
   * RECIBE LA LISTA DE USUARIOS PARA CARGAR EN PÁGINA POR *NGFOR
   */
  @Input() miembro: IMiembro;

  /*****************************************************/
  /** 
   * MANDA LA CANTIDAD PARA SUMARLA EN @cuentaTotalPagada
   */
  @Output() sumarTicket = new EventEmitter<number>();

  /*****************************************************/
  /**
   * MANDA LA CANTIDAD PARA SUMARLA EN @cuentaTotalNoPagada
   */
  @Output() sumarTicketNP = new EventEmitter<number>();

  /*****************************************************/
  /**
 * MANDA LA CANTIDAD QUE SE RESTA EN LA CUENTA A DEBER DEL MIEMBRO
 * PARA RESTARLA EN @cuentaTotalNoPagada Y SUMARLA EN @cuentaTotalPagada
 */
  @Output() limpiarNP = new EventEmitter<number>();
  
  /*****************************************************/
  /**
 * MANDA EL NOMBRE DEL USUARIO A ELIMINAR EN EL ARRAY
 */
  @Output() eliminarM = new EventEmitter<any>();


  panelOpenState = false;



  constructor() { }

  ngOnInit(): void { }


  agregarTicket() {
    this.sumarTicket.emit(
      this.miembro.cuentaPagada += 5
    );
  }

  agregarTicketNoPagado() {
    this.sumarTicketNP.emit(
      this.miembro.cuentaNoPagada += 5
    );
  }

  borrarCuentaNP() {
    let cuentaNoPagada = this.miembro.cuentaNoPagada
    this.miembro.cuentaNoPagada -= cuentaNoPagada
    this.limpiarNP.emit(cuentaNoPagada)
  }

  borrarCuentaP() {
    this.miembro.cuentaPagada -= this.miembro.cuentaPagada
  }

  eliminarMiembro() {
    const seleccionado = this.miembro.nombre
    this.eliminarM.emit(seleccionado)
  }

}
