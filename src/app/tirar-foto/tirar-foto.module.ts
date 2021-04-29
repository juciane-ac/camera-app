import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TirarFotoPageRoutingModule } from './tirar-foto-routing.module';

import { TirarFotoPage } from './tirar-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TirarFotoPageRoutingModule
  ],
  declarations: [TirarFotoPage]
})
export class TirarFotoPageModule {}
