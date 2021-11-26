import { Component } from '@angular/core';
import { Task } from './components/tasks/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todolist';

  tasks = JSON.parse(localStorage.getItem('@todoangular:tasks')) || [];

  onAddTask(e: string) {
    if (e.trim() === '') {
      return;
    }
    this.tasks.push({
      id: this.tasks[this.tasks.length - 1]?.id + 1 || 1,
      title: e,
      marked: false,
    });
    this.updateStorage();
  }

  onMarkTask(id: number) {
    let task = this.tasks.find((task: Task) => task.id === id);

    task.marked = !task.marked;
    this.updateStorage();
  }

  onDeleteTask(id: number) {
    this.tasks = this.tasks.filter((task: Task) => task.id !== id);
    this.updateStorage();
  }

  updateStorage() {
    localStorage.removeItem('@todoangular:tasks');
    localStorage.setItem('@todoangular:tasks', JSON.stringify(this.tasks));
  }
}
