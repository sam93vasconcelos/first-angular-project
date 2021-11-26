import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  @Output() addTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(newTaskForm: any) {
    let { task } = newTaskForm.value;

    this.addTask.emit(task);

    newTaskForm.controls.task.reset();
  }
}
