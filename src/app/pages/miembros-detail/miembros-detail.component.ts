import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMiembro } from 'src/app/interfaces/miembros.interface';
import { ContactServiceService } from 'src/app/services/contact-service.service';
import { HttpServiceService } from 'src/app/services/http-service.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-miembros-detail',
  templateUrl: './miembros-detail.component.html',
  styleUrls: ['./miembros-detail.component.scss']
})
export class MiembrosDetailComponent implements OnInit{

  /**
   * VARIABLE LOCAL DE @listadoMiembros
   */
miembrosTabla:IMiembro[] = []

/**
 * OBTENCIÓN DE FECHA PARA EXPORTACIÓN DE EXCEL
 */
date = new Date().toLocaleDateString('es-ES')



constructor(private contactService:ContactServiceService, private httpService:HttpServiceService ,private route:Router){}  

ngOnInit(): void {
  
  /**
   * IMPORTACION A VARIBLE LOCAL DESDE BASE DE DATOS FIREBASE
   */
  this.httpService.cargarMiembros().subscribe(
    miembrosBD => {
      this.miembrosTabla = Object.values(miembrosBD)
      console.table(this.miembrosTabla)
    }
  )
}

/**
 * VALORES DE TABLA
 */
displayedColumns: string[] = ['nombre', 'cPagada', 'cDeber'];
dataSource = this.miembrosTabla

/**
 * @exportToExcel CONVIERTE LA TABLA DE USUARIOS DEL ARRAY
 * EN FORMATO JSON Y LO EXPORTA A XLSX O EXCEL
 */
exportToExcel(): void {
  const worksheet = XLSX.utils.json_to_sheet(this.miembrosTabla);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Miembros');
  XLSX.writeFile(workbook, 'Listado_tickets_miembros_' + this.date + '.xlsx');
}

/**
 * @volverHome NAVEGA A PÁGINA PRINCIPAL
 */
volverHome() {
  this.route.navigate(["home"])
  }
}
