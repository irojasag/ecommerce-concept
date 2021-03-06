import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryComponent } from './components/category/category.component';
import { HotSalesComponent } from './components/hot-sales/hot-sales.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { BestSellerProductComponent } from './components/best-seller-product/best-seller-product.component';
import { ExplorerComponent } from './components/explorer/explorer.component';


@NgModule({
  declarations: [HomeComponent, TopBarComponent, SearchComponent, CategoryComponent, HotSalesComponent, BestSellerComponent, BestSellerProductComponent, ExplorerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
