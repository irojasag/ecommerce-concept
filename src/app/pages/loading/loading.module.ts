import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingRoutingModule } from './loading-routing.module';
import { LoadingComponent } from './pages/loading/loading.component';


@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    LoadingRoutingModule
  ]
})
export class LoadingModule { }
