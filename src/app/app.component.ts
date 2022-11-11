
import { Component } from '@angular/core';
import { Firestore, collectionData, collection, setDoc, doc, deleteDoc, deleteField, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Imemo } from './imemo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  memos$: Observable<Imemo[]>;
  inputMemo: string= '';
  


  constructor(public firestore: Firestore) {
    const collect: any = collection(firestore, 'memos');
    this.memos$ = collectionData(collect, {idField: 'id'});
    this.memos$.subscribe(this.logFirestore);   
  }

  //Log Firestore chances currently 
  logFirestore(memos: Imemo[]){
    console.log('FirestoreMemos: ',memos);
  }

  addNote(){
    const coll: any = collection(this.firestore, 'memos');// collection con firestore holen / Sammlung
    if (this.inputMemo.trim() !== '') {
      setDoc(doc(coll),{text: this.inputMemo, person: 'Georg'});  //hinzufügen setDoc(param1, param2)
      //param1 = welches dokument in der Sammlung
      //param2 = json mit werten übergeben
    }
    this.inputMemo = '';// inputfeld wieder leeren
  }

  // sortierfunktion für die Memos bauen



}
