import { Component, OnInit } from '@angular/core';
import { MeInterface } from '../interface/me.interface';
import { TrabajosInterface } from '../interface/trabajos.interface';
import { TrabajosService } from '../trabajos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trabajosInfo: TrabajosInterface[] = [];
  meData: MeInterface = {
    id$: "",
    correo: "",
    nombre: "",
    descripcion: ""
  };

  constructor(private trabajoService: TrabajosService) { }

  ngOnInit(): void {
    
    this.trabajoService.getMe()
    .subscribe((res: any) => {
      if (res) {
        this.meData = res.payload.data();
      }
    });
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
