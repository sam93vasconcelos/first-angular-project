import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  @Input() tasks: Task[];
  @Output() deleteTask = new EventEmitter();
  @Output() markTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(task: Task) {
    this.markTask.emit(task.id);
  }

  onDelete(id: number) {
    this.deleteTask.emit(id);
  }
}
