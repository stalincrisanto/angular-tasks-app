import { Component, Input } from '@angular/core';
import { TaskSService } from '../services/tasks.service';
import { Task } from '../types/types';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() newTask: Task = {
    id: '',
    name: '',
    description: '',
    priority: undefined,
    startDate: null,
    dueDate: null,
  };

  constructor(private taskService: TaskSService) {}

  public addTask(): void {
    const id = uuid();
    this.taskService.addTask({...this.newTask, id});
    this.newTask = {
      id: '',
      name: '',
      description: '',
      priority: undefined,
      startDate: null,
      dueDate: null,
    }
  }
}
