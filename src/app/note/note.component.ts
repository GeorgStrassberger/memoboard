import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

@Input() person: string = '';
@Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
