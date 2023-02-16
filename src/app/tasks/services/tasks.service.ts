import { Injectable } from '@angular/core';
import { Task } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class TaskSService {

  private tasks: Task[] = [
    {
      id: "3c4ea5de-8be8-44e4-91dc-9c2f827cb654",
      name:"Primera tarea",
      description: "es la primera tarea",
      priority: "medium",
      startDate: new Date(),
      dueDate: new Date()
    },
    {
      id: "71ca8bc9-72fc-4df8-ba99-c3c1a709460f",
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

  public deleteTask (id: string){
    const task = this.tasks.find(el => el.id === id);
    const index = this.tasks.indexOf(task!);
    this.tasks.splice(index,1);
  }
}


