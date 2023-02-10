import { formatCurrency } from '@angular/common';
import { Component, Injectable, Input, OnInit, Output } from '@angular/core';
import { IMiembro } from 'src/app/interfaces/miembros.interface';
import { FormArray, FormBuilder, FormControl, FormGroup, SelectControlValueAccessor } from '@angular/forms';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { MiembrosPageComponent } from 'src/app/pages/miembros-page/miembros-page.component';
import { ThisReceiver } from '@angular/compiler';
import { findIndex } from 'rxjs';



@Component({
  selector: 'app-crear-miembro',
  templateUrl: './crear-miembro.component.html',
  styleUrls: ['./crear-miembro.component.scss']
})


export class CrearMiembroComponent implements OnInit {
  /**
   * VALOR POR DEFECTO
   */
  value = '';

  nuevoMiembro: FormGroup = new FormGroup({})

  miembros: IMiembro[] | undefined = []

  

  constructor(private formBuilder: FormBuilder) { }

  @Input() cuentaTotalPagada: number = 0
  @Input() cuentaTotalNoPagada: number = 0


  

  ngOnInit(): void {

    /**
     * CREACION DE NUEVO MIEMBRO RECOGIDOS EN 
     * FORMGROUP CON VALORES POR DEFECTO
     * CUENTAS INICIAN EN 0 SIEMPRE
     */
    this.nuevoMiembro = new FormGroup ({
      nombre: new FormControl(''),
      cuentaPagada: new FormControl(0),
      cuentaNoPagada: new FormControl(0)
    })
  }


  //GETTERS DE FORMULARIO
  get nombre() {
    return this.nuevoMiembro.get('nombre')
  }

  get CuentaPagada() {
    return this.nuevoMiembro.get('CuentaPagada')
  }

  get CuentaNoPagada() {
    return this.nuevoMiembro.get('CuentaNoPagada')
  }

  /**
   * @enviarFormulario COMPRUEBA SI LOS VALORES REQUERIDOS 
   * SON CORRECTOS, SI LO SON
   * RECOGE LOS VALORES DEL FORMULARIO 
   * Y LOS CARGA EN EL ARRAY
   */
  enviarFormulario() {
    if (this.nuevoMiembro.valid) {
      alert('Se va a añadir al nuevo basuras')
      this.miembros?.push(this.nuevoMiembro.value)
    }
  }
  /**
   * @agregarTicket RECOGE EL VALOR QUE RECIBE POR EMITTER
   * DE COMPONENTE MIEMBROS-PAGE Y LO SUMA 
   * EN @cuentaTotalPagada
   */
  agregarTicket() {
    this.cuentaTotalPagada += 5
  }

  /**
 * @agregarTicketNoPagado RECOGE EL VALOR QUE RECIBE POR EMITTER
 * DE COMPONENTE MIEMBROS-PAGE Y LO SUMA 
 * EN @cuentaTotalNoPagada
 */
  agregarTicketNoPagado() {
    this.cuentaTotalNoPagada += 5
  }

  /**
   * @eliminarNP RECOGE EL VALOR QUE RECIBE POR EMITTER 
   * Y BORRA LA CANTIDAD EQUIVALENTE EN @cuentaTotalNoPagada
   * Y SUMA A @cuentaTotalPagada
   */
  eliminarNP(cuentaNoPagada: number) {
    this.cuentaTotalNoPagada -= cuentaNoPagada;
    if (this.cuentaTotalNoPagada >= 0) {
      this.cuentaTotalPagada += cuentaNoPagada;
    }
  }

  /**
   * @eliminarMiembroSeleccionado RECIBE EL NOMBRE DEL USUARIO 
   * DESDE EL EMITTER, BUSCA EL USUARIO EN EL ARRAY POR EL INDEX
   * Y LO BORRA DE LA LISTA
   */
  eliminarMiembroSeleccionado(seleccionado:any) {
    let i = this.miembros?.findIndex((miembro:IMiembro) => miembro.nombre ===  seleccionado)
    if(i !== -1) {
      this.miembros?.splice(i as number, 1)
      }
    }
  }

