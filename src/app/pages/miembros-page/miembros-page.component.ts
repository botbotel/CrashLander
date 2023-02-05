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

  @Input() miembro: IMiembro;
  @Output() sumarTicket = new EventEmitter<number>();
  @Output() sumarTicketNP = new EventEmitter<number>();
  @Output() agregarTotalP = new EventEmitter<number>();





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




}








