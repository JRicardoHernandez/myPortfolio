import { Component, OnInit } from '@angular/core';
import { TrabajosInterface } from '../interface/trabajos.interface';
import { TrabajosService } from '../trabajos.service';

@Component({
  selector: 'app-lista-trabajo',
  templateUrl: './lista-trabajo.component.html',
  styleUrls: ['./lista-trabajo.component.css']
})
export class ListaTrabajoComponent implements OnInit {
  trabajosInfo: TrabajosInterface[] = [];

  constructor(private trabajoService: TrabajosService) { }

  ngOnInit(): void {
    this.trabajoService.getAll()
    .subscribe((res: any) => {
      if (res) {
        this.trabajosInfo = [];
        res.forEach((element: any) => {
          var data = element.payload.doc.data();
          data["id$"] = element.payload.doc.id;
          this.trabajosInfo.push(data);
        });
      }
    });
  }

}
