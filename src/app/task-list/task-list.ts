
import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { TaskColorPipe } from '../pipes/task-color-pipe';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, TaskColorPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {

  tasks = [
    {
      id: 1,
      title: 'Lire le cours Angular',
      dueDate: new Date(2026, 10, 18)
    },
    {
      id: 2,
      title: 'Installer Angular CLI',
      dueDate: new Date(2026, 10, 19)
    },
    {
      id: 3,
      title: 'Créer mon application TaskFlow',
      dueDate: new Date(2026, 10, 20)
    }
  ];

  clearTasks() {
    this.tasks = [];
  }

  restoreTasks() {
    this.tasks = [
      {
        id: 1,
        title: 'Lire le cours Angular',
        dueDate: new Date(2026, 10, 18)
      },
      {
        id: 2,
        title: 'Installer Angular CLI',
        dueDate: new Date(2026, 10, 19)
      },
      {
        id: 3,
        title: 'Créer mon application TaskFlow',
        dueDate: new Date(2026, 10, 20)
      }
    ];
  }
}
