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


  /**
   * @agregarTicket SUMA +5 EN LA CUENTA PAGADA DEL MIEMBRO
   * Y A SU VEZ EMITE EL VALOR PARA SUMARLO EN @cuentaTotalPagada
   * DE CREAR-MIEMBRO-COMPONENT
   */
  agregarTicket() {
    alert('ATENCION VA A AGREGAR UN TICKET PAGADO')
    let cuentaPagada = this.miembro.cuentaPagada += 5
    this.sumarTicket.emit(
      cuentaPagada
    );
  }
  /************************************************************/
  /**
   * @agregarTicketNoPagado SUMA +5 EN LA CUENTA NO PAGADA DEL MIEMBRO
   * Y A SU VEZ EMITE EL VALOR PARA SUMARLO EN @cuentaTotalNoPagada
   * DE CREAR-MIEMBRO-COMPONENT
   */
  agregarTicketNoPagado() {
    alert('ATENCION VA A AGREGAR UN TICKET NO PAGADO')
    this.sumarTicketNP.emit(
      this.miembro.cuentaNoPagada += 5
    );
  }
    /************************************************************/
  /**
   * @borrarCuentaNP BORRA LA CUENTA NO PAGADA DEL MIEMBRO, 
   * SUMA LA CANTIDAD A DEBER A @cuentaPagada DEL MIEMBRO
   * Y A SU VEZ EMITE EL VALOR BORRADO A FUNCION @eliminarNP EN CREAR-MIEMBRO-COMPONET
   * PARA BORRAR DE @cuentaTotalNoPagada EL MISMO VALOR Y SUMARLO EN 
   * @cuentaTotalPagada
   */
  borrarCuentaNP() {
    alert('ATENCION VA A BORRAR LA CUENTA DE LOS TICKETS NO PAGADOS')
    let cuentaNoPagada = this.miembro.cuentaNoPagada
    this.miembro.cuentaNoPagada -= cuentaNoPagada
    this.miembro.cuentaPagada += cuentaNoPagada
    this.limpiarNP.emit(cuentaNoPagada)
  }
    /************************************************************/
  /**
   * @borrarCuentaP BORRA LA CUENTA TOTAL DEL MIEMBRO SELECCIONADO
   */
  borrarCuentaP() {
    alert('ATENCION VA A BORRAR LA CUENTA DE LOS TICKETS PAGADOS')
    this.miembro.cuentaPagada -= this.miembro.cuentaPagada
  }
    /************************************************************/
  /**
   * @eliminarMiembro EMITE EL NOMBRE DEL MIEMBRO SELECCIONADO A
   * @eliminarMiembroSeleccionado PARA SU COMPROBACIÓN Y BORRADO DEL ARRAY
   */
  eliminarMiembro() {
    alert('ATENCION VA A BORRAR UN USUARIO')
    const seleccionado = this.miembro.nombre
    this.eliminarM.emit(seleccionado)
  }

}
