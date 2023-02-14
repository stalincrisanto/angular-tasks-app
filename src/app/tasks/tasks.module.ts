import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ModalComponent } from './modal/modal.component';
import { FiltersComponent } from './filters/filters.component';
import { ListComponent } from './list/list.component';

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
    CommonModule
  ]
})
export class TasksModule { }

//TODO: add dates to form
