import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryComponent } from './components/category/category.component';


@NgModule({
  declarations: [HomeComponent, TopBarComponent, SearchComponent, CategoryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
