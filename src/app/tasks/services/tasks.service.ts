import { Injectable } from '@angular/core';
import { Task } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class TaskSService {

  private tasks: Task[] = [
    {
      name:"Primera tarea",
      description: "es la primera tarea",
      priority: "medium",
      startDate: new Date(),
      dueDate: new Date()
    },
    {
      name:"Segunda tarea de Stalin",
      description: "es una descripción de la segunda tarea",
      priority: "high",
      startDate: new Date(),
      dueDate: new Date()
    },
  ];

  get getTasks () {
    return [...this.tasks]
  }

  constructor() { }

  public addTask (task: Task) {
    this.tasks.push(task);
  }
}


