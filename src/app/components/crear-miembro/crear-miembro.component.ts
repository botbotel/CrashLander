import { formatCurrency } from '@angular/common';
import { Component, Injectable, Input, OnInit, Output } from '@angular/core';
import { IMiembro } from 'src/app/interfaces/miembros.interface';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, SelectControlValueAccessor, Validators } from '@angular/forms';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { MiembrosPageComponent } from 'src/app/pages/miembros-page/miembros-page.component';
import { ThisReceiver } from '@angular/compiler';
import { findIndex } from 'rxjs';
import { ContactServiceService } from 'src/app/services/contact-service.service';
import { Router } from '@angular/router';




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

  miembros: IMiembro[] =  []
  
  cuentaTotalPagada:number
  cuentaTotalNoPagada:number
  

  constructor(private formBuilder: FormBuilder, private contactService:ContactServiceService, private router:Router) { }


  ngOnInit(): void {

    /**
     * CARGA EL ARRAY DESDE CONTACT-SERVICE Y LO DECLARA COMO MIEMBROS
     */
    this.miembros = this.contactService.listadoMiembros

    /**
     * DECLARACION DE CUENTAS TOTALES EN VARIABLE LOCAL
     */
    this.cuentaTotalPagada = this.contactService.cuentaTotalPagada
    this.cuentaTotalNoPagada = this.contactService.cuentaTotalNoPagada


    /**
     * CREACION DE NUEVO MIEMBRO RECOGIDOS EN 
     * FORMGROUP CON VALORES POR DEFECTO
     * CUENTAS INICIAN EN 0 SIEMPRE
     */
    this.nuevoMiembro = new FormGroup ({
      nombre: new FormControl('', [Validators.required]),
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
          this.contactService.listadoMiembros.push(this.nuevoMiembro.value)
      }
    }
  /**
   * @agregarTicket RECOGE EL VALOR QUE RECIBE POR EMITTER
   * DE COMPONENTE MIEMBROS-PAGE Y LO SUMA 
   * EN @cuentaTotalPagada
   */
  agregarTicket() {
    this.contactService.cuentaTotalPagada += 5
    this.cuentaTotalPagada += 5 
  }

  /**
 * @agregarTicketNoPagado RECOGE EL VALOR QUE RECIBE POR EMITTER
 * DE COMPONENTE MIEMBROS-PAGE Y LO SUMA 
 * EN @cuentaTotalNoPagada
 */
  agregarTicketNoPagado() {
    this.contactService.cuentaTotalNoPagada += 5
    this.cuentaTotalNoPagada += 5
  }

  /**
   * @eliminarNP RECOGE EL VALOR QUE RECIBE POR EMITTER 
   * Y BORRA LA CANTIDAD EQUIVALENTE EN @cuentaTotalNoPagada
   * Y SUMA A @cuentaTotalPagada
   */
  eliminarNP(cuentaNoPagada: number) {
    this.contactService.cuentaTotalNoPagada -= cuentaNoPagada;
    this.cuentaTotalNoPagada -= cuentaNoPagada
    if (this.contactService.cuentaTotalNoPagada >= 0) {
      this.contactService.cuentaTotalPagada += cuentaNoPagada; 
      this.cuentaTotalPagada += cuentaNoPagada
    }
  }

  /**
   * @eliminarMiembroSeleccionado RECIBE EL NOMBRE DEL MIEMBRO 
   * DESDE EL EMITTER, BUSCA EL MIEMBRO EN EL ARRAY, COGE SU INDEX
   * Y LO BORRA DE LA LISTA
   */
  eliminarMiembroSeleccionado(seleccionado:any) {
    let i = this.contactService.listadoMiembros.findIndex((miembro:IMiembro) => miembro.nombre ===  seleccionado)
    if(i !== -1) {
      this.miembros?.splice(i as number, 1)
      }
    }

    /**
     * @irResumen NAVEGA A PÁGINA DE MIEMBROS DETAIL
     */
    irResumen() {
      this.router.navigate(["/miembrosDetail"])
    }
  }

