import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMiembro } from 'src/app/interfaces/miembros.interface';
import { CrearMiembroComponent } from 'src/app/components/crear-miembro/crear-miembro.component'


import { MatExpansionModule } from '@angular/material/expansion';
import { ContactServiceService } from 'src/app/services/contact-service.service';

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


  
  constructor(private contactService:ContactServiceService) { }


  ngOnInit(): void { }
  
  
  /**
   * @agregarTicket SUMA +5 EN LA CUENTA PAGADA DEL MIEMBRO
   * Y A SU VEZ EMITE EL VALOR PARA SUMARLO EN @cuentaTotalPagada
   * DE CREAR-MIEMBRO-COMPONENT
   */
  agregarTicket() {
    let mensaje = confirm('ATENCION VA A AGREGAR UN TICKET PAGADO')
    if (mensaje === true) {
      let cuentaPagada = this.miembro.cuentaPagada += 5
      this.sumarTicket.emit(
      cuentaPagada
      );
    }
  }
  /************************************************************/
  /**
   * @agregarTicketNoPagado SUMA +5 EN LA CUENTA NO PAGADA DEL MIEMBRO
   * Y A SU VEZ EMITE EL VALOR PARA SUMARLO EN @cuentaTotalNoPagada
   * DE CREAR-MIEMBRO-COMPONENT
   */
  agregarTicketNoPagado() {
    let mensaje = confirm('ATENCION VA A AGREGAR UN TICKET NO PAGADO')
    if (mensaje === true) {
      this.sumarTicketNP.emit(
        this.miembro.cuentaNoPagada += 5
      );
    }
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
    let mensaje = confirm('ATENCION VA A BORRAR LA CUENTA DE LOS TICKETS NO PAGADOS, SOLO DEBE BORRARSE SI EL IMPORTE A DEBER ES PAGADO ¿ESTÁS SEGURO?')
    if (mensaje === true) {
      let cuentaNoPagada = this.miembro.cuentaNoPagada
      this.miembro.cuentaNoPagada -= cuentaNoPagada
      this.miembro.cuentaPagada += cuentaNoPagada
      this.limpiarNP.emit(cuentaNoPagada)
    }
  }
  /************************************************************/
  /**
   * @borrarCuentaP BORRA LA CUENTA TOTAL DEL MIEMBRO SELECCIONADO
   */
  borrarCuentaP() {
    let mensaje = confirm('ATENCION VA A BORRAR LA CUENTA DE LOS TICKETS PAGADOS')
    if (mensaje === true) {
      this.miembro.cuentaPagada -= this.miembro.cuentaPagada
    }
    this.contactService.loadToBD()
  }
  /************************************************************/
  /**
   * @eliminarMiembro EMITE EL NOMBRE DEL MIEMBRO SELECCIONADO A
   * @eliminarMiembroSeleccionado PARA SU COMPROBACIÓN Y BORRADO DEL ARRAY
   */
  eliminarMiembro() {
    let mensaje = confirm('ATENCION VA A BORRAR UN USUARIO')
    if (mensaje === true) {
      const seleccionado = this.miembro.nombre
      this.eliminarM.emit(seleccionado)
    }
  }

}
