import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { TrabajosInterface } from './interface/trabajos.interface';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {
  private dbPath = '/trabajos';
  private mePath = '/contacto';
  
  constructor(private db: AngularFirestore ) {
  }

  getAll() {
    return this.db.collection(this.dbPath).snapshotChanges();
  }

  getIdDocument(idDoc: string) {
    return this.db.collection(this.dbPath).doc(idDoc).snapshotChanges();
  }
  
  getMe() {
    return this.db.collection(this.mePath).doc("Clxk6WDhz5t9WjSbkja7").snapshotChanges();
  }

}
