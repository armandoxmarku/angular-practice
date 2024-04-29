
import { Component, OnInit ,Input } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgStyle } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule,NgStyle ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit{
  @Input() task!: Task;
  faTimes = faTimes;
  constructor() { }
  ngOnInit(): void {
  }

}