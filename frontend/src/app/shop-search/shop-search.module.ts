import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopSearchPageRoutingModule } from './shop-search-routing.module';

import { ShopSearchPage } from './shop-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ShopSearchPageRoutingModule
  ],
  declarations: [ShopSearchPage]
})
export class ShopSearchPageModule {}
