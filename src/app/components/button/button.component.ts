import { NgStyle } from '@angular/common';
import { Component ,OnInit,Input ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent  implements OnInit{
  @Input() text: string = ''; // Assign a default value to the 'text' property
  @Input() color: string = ''; // Assign a default value to the 'color' property
  @Output() btnClick = new EventEmitter(); // Create an event emitter for the 'btnClick' event
  constructor() { }
  ngOnInit(): void {
  }
  onClick(){

    this.btnClick.emit();}
}
