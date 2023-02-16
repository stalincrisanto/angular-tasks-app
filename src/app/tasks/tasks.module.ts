import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ModalComponent } from './modal/modal.component';
import { FiltersComponent } from './filters/filters.component';
import { ListComponent } from './list/list.component';
import { TaskSService } from './services/tasks.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    ModalComponent,
    FiltersComponent,
    ListComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    TaskSService
  ]
})
export class TasksModule { }

//TODO: add dates to form
