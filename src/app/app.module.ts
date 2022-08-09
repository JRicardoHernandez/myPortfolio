import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TrabajosService } from './trabajos.service';
import { TrabajoDetalleComponent } from './trabajo-detalle/trabajo-detalle.component';
import { ListaTrabajoComponent } from './lista-trabajo/lista-trabajo.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrabajoDetalleComponent,
    ListaTrabajoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [TrabajosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
