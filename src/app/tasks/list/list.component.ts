import { Component } from '@angular/core';
import * as dayjs from 'dayjs';
import { TaskSService } from '../services/tasks.service';
import { Task } from '../types/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  tasksList: Task[] = this.taskService.getTasks;
  formatTasks: any;

  constructor(private taskService: TaskSService) {}

  ngOnInit(): void {
    this.formatTasks = this.formatedTasks();
  }

  formatedTasks () {
    const formatTask = this.taskService.getTasks.map((task) => {
      return {
        ...task,
        startDate: dayjs(task.startDate).format('dddd, MMMM D, YYYY'),
        dueDate: dayjs(task.dueDate).format('dddd, MMMM D, YYYY')
      }
    })
    console.log("datos de la fechas", formatTask)
    return formatTask;
  }
}
