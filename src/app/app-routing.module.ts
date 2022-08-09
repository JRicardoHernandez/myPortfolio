import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaTrabajoComponent } from './lista-trabajo/lista-trabajo.component';
import { TrabajoDetalleComponent } from './trabajo-detalle/trabajo-detalle.component';

const routes: Routes = [
	{ path: '',   redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
  { path: 'lista-trabajo', component: ListaTrabajoComponent },
  { path: 'trabajo-detalle/:id', component: TrabajoDetalleComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
