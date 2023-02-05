import { formatCurrency } from '@angular/common';
import { Component, Injectable, Input, OnInit, Output } from '@angular/core';
import { IMiembro } from 'src/app/interfaces/miembros.interface';
import { MIEMBROS } from 'src/app/mocks/miembros.mock';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { MiembrosPageComponent } from 'src/app/pages/miembros-page/miembros-page.component';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-crear-miembro',
  templateUrl: './crear-miembro.component.html',
  styleUrls: ['./crear-miembro.component.scss']
})


export class CrearMiembroComponent implements OnInit {

  nuevoMiembro: FormGroup = new FormGroup({})
  miembros: IMiembro[] | undefined = []



  constructor(private formBuilder: FormBuilder) { }

  cuentaTotalPagada: number = 0
  cuentaTotalNoPagada: number = 0

  ngOnInit(): void {

    this.nuevoMiembro = this.formBuilder.group(
      {
        nombre: '',
        cuentaPagada: 0,
        cuentaNoPagada: 0
      }
    );

  }



  get nombre() {
    return this.nuevoMiembro.get('nombre')
  }

  get CuentaPagada() {
    return this.nuevoMiembro.get('CuentaPagada')
  }

  get CuentaNoPagada() {
    return this.nuevoMiembro.get('CuentaNoPagada')
  }

  enviarFormulario() {
    if (this.nuevoMiembro.valid) {
      alert('Se va a añadir al nuevo basuras')
      this.miembros?.push(this.nuevoMiembro.value)
    }
  }

  agregarTicket(){
    this.cuentaTotalPagada +=5
  }

  agregarTicketNoPagado(){
    this.cuentaTotalNoPagada +=5
  }


}



