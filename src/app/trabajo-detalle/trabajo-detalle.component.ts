import { Component, OnInit } from '@angular/core';
import { TrabajosInterface } from '../interface/trabajos.interface';
import { TrabajosService } from '../trabajos.service';
import { ActivatedRoute, Router } from '@angular/router'
import { MeInterface } from '../interface/me.interface';

@Component({
  selector: 'app-trabajo-detalle',
  templateUrl: './trabajo-detalle.component.html',
  styleUrls: ['./trabajo-detalle.component.css']
})
export class TrabajoDetalleComponent implements OnInit {
  trabajoInfo: TrabajosInterface = {
    id$: "",
    empresa: "",
    Inicio: "",
    Fin: "",
    Puesto: "",
    Descripcion: "",
    Tecnologias: ""
  };
  meData: MeInterface = {
    id$: "",
    correo: "",
    nombre: "",
    descripcion: ""
  };
  id: any = "";
  loadData: boolean = false;

  constructor(private trabajoService: TrabajosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadData = false;
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id) {
      this.router.navigateByUrl("home");
    }
    this.trabajoService.getMe()
    .subscribe((res: any) => {
      if (res) {
        this.meData = res.payload.data();
      }
    });
    this.trabajoService.getIdDocument(this.id)
    .subscribe((res: any) => {
      if (res) {
        this.trabajoInfo = res.payload.data();
        this.loadData = true;
      } else {
        this.router.navigateByUrl("home");
      }
    });
  }

}
