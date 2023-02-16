import { Component } from '@angular/core';
import * as dayjs from 'dayjs';
import { TaskSService } from '../services/tasks.service';
import { Task } from '../types/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  constructor(private taskService: TaskSService) {}

  get tasksList () {
    const formatTask = this.taskService.getTasks.map((task) => {
      return {
        ...task,
        startDate: dayjs(task.startDate).format('dddd, MMMM D, YYYY'),
        dueDate: dayjs(task.dueDate).format('dddd, MMMM D, YYYY')
      }
    })
    return formatTask;
  }

  deleteTask(id: string){
    this.taskService.deleteTask(id);
  }
}
