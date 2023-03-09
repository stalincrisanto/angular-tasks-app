import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { TaskSService } from '../services/tasks.service';
import { Task } from '../types/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  // tasksList: Task[] = [];

  constructor(private taskService: TaskSService) {}

  // ngOnInit(): void {
  //   // const formatTask = this.taskService.getTasks.map((task) => {
  //   //   return {
  //   //     ...task,
  //   //     startDate: task.startDate?.toUTCString,//dayjs(task.startDate).format('dddd, MMMM D, YYYY'),
  //   //     dueDate: task.startDate?.toUTCString//dayjs(task.dueDate).format('dddd, MMMM D, YYYY'),
  //   //   };
  //   // });
  //   console.log("hola")
  //   this.tasksList = this.taskService.getTasks;
  // }

  get tasksList() {
    const formatTask = this.taskService.getTasks.map((task) => {
      return {
        ...task,
        startDate: dayjs(task.startDate).format('dddd, MMMM D, YYYY'),
        dueDate: dayjs(task.dueDate).format('dddd, MMMM D, YYYY'),
      };
    });
    console.log("task", formatTask);
    return formatTask;
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id);
  }

  priorityStyle(priority: string): string {
    return priority === 'high'
      ? 'badge text-bg-danger'
      : priority === 'medium'
      ? 'badge text-bg-warning'
      : 'badge text-bg-primary';
  }

  completeTask(id: string): void {
    console.log(id);
    this.completeTask(id);
  }
}
