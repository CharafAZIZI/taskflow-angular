import { Component } from '@angular/core';
import { Home } from './home/home';
import { About } from './about/about';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home, About, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  title = 'TaskFlow';
  canDelete = false;

  rename() {
    this.title = 'Mes tâches';
  }
}
