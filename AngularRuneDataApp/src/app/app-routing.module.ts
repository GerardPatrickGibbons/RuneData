import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {appRoutes} from '../routes';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
