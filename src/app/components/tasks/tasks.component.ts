import { Component, OnInit } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks = [
    {
      id: 1,
      title: 'Aprender sobre components',
      marked: false,
    },
    {
      id: 2,
      title: 'Aprender sobre methods',
      marked: false,
    },
    {
      id: 3,
      title: 'Aprender sobre methods',
      marked: false,
    },
    {
      id: 4,
      title: 'Aprender sobre methods',
      marked: false,
    },
    {
      id: 5,
      title: 'Aprender sobre methods',
      marked: false,
    },
    {
      id: 6,
      title: 'Aprender sobre methods',
      marked: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onClick(task: Task) {
    task.marked = !task.marked;
  }

  onDelete(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
