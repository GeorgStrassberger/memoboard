import { Component,Input, OnInit, Output } from '@angular/core';
import { Imemo } from '../imemo';
import { Firestore, collectionData, collection, setDoc, doc, deleteDoc, deleteField, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

// single input wird nicht benötigt ich kann alles über mein eigenes Interfase importieren

@Input() memo!: Imemo;


constructor(public firestore: Firestore) {

  }

  ngOnInit(): void {
    
    console.log('ID: ', this.memo.id);
    console.log('ID: ', this.memo.id);
  }

  async entfNote(memoId : string){
    const collec: any = collection(this.firestore, 'memos');// collection con firestore holen / Sammlung
    console.log('memoId: ',memoId);

    await deleteDoc(doc(collec, memoId));
    // await deleteDoc(doc(Sammlung, DocumentID) Feld);
  }

}
