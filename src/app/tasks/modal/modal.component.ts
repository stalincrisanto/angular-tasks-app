import { Component } from '@angular/core';
import { TaskSService } from '../services/tasks.service';
import { Task } from '../types/types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  newTask: Task = {
    name: '',
    description: '',
    priority: undefined,
    startDate: null,
    dueDate: null,
  };

  constructor(private taskService: TaskSService) {}

  public addTask(): void {
    // this.taskService.addTask(this.newTask);
    console.log('esto para agregar---->', this.newTask);
  }
}
