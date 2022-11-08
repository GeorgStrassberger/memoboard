import { getLocaleWeekEndRange } from '@angular/common';
import { Component } from '@angular/core';
import { Firestore, collectionData, collection, setDoc, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



interface Memo {
  text: string,
  person: string,
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  memos$: Observable<Memo[]>;
  inputMemo: string= '';


  constructor(public firestore: Firestore) {
    const collect: any = collection(firestore, 'memos');
    this.memos$ = collectionData(collect);
    this.memos$.subscribe(this.logFirestore);   
  }

  //Log Firestore chances currently 
  logFirestore(memos: Memo[]){
    console.log('FirestoreMemos: ',memos);
  }

  addNote(){
    const coll: any = collection(this.firestore, 'memos');// collection con firestore holen / Sammlung
    // if (!this.inputMemo.trim() == '') { Kann ich nicht negieren WARUM??
    if (this.inputMemo.trim() !== '') {
      setDoc(doc(coll),{text: this.inputMemo, person: 'Georg'});  //hinzufügen setDoc(param1, param2)
      //param1 = welches dokument in der Sammlung
      //param2 = json mit werten übergeben
    }
    this.inputMemo = '';// inputfeld wieder leeren
  }

  async entfNote(){
    const coll: any = collection(this.firestore, 'memos');// collection con firestore holen / Sammlung
    await deleteDoc(doc(coll,  ));
  }


// local Test

  memos:any[] = [
    {name: 'Georg', text: 'Wieso'},
    {name: 'Georg', text: 'Warum'},
    {name: 'Georg', text: 'Weshalb'}
  ];


  renderMemos(){
    const content : HTMLElement | any = document.getElementById('content');
    content.innerHTML = '';
    for (let index = 0; index < this.memos.length; index++) {
      const memo = this.memos[index];
      content.innerHTML += this.templateNote(memo);      
    }
  }

  templateNote(memo:any){
    return /*html*/ ` 
                <div class="note">
                  <h3>${memo.name}</h3>
                  <p>${memo.text}</p>
                </div>
                `;
  }

}
