import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TirarFotoPage } from './tirar-foto.page';

const routes: Routes = [
  {
    path: '',
    component: TirarFotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TirarFotoPageRoutingModule {}
