import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMiembro } from 'src/app/interfaces/miembros.interface';
import { ContactServiceService } from 'src/app/services/contact-service.service';


@Component({
  selector: 'app-miembros-detail',
  templateUrl: './miembros-detail.component.html',
  styleUrls: ['./miembros-detail.component.scss']
})
export class MiembrosDetailComponent implements OnInit{

miembros:IMiembro[]


constructor(private contactService:ContactServiceService, private route:Router){}  

ngOnInit(): void {
  /**
   * IMPORTACION DE LISTA DE MIEMBROS DESDE CONTACT-SERVICE
   */
  this.contactService.listadoMiembros = this.miembros
}

displayedColumns: string[] = ['nombre', 'cPagada', 'cDeber'];
dataSource = this.contactService.listadoMiembros;


volverHome() {
  this.route.navigate(["home"])
  }
}
