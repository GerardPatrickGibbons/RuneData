import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {appRoutes} from '../routes';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionAuctionHouseComponent } from './sections/section-auction-house/section-auction-house.component';
import { SectionProfitMarginsComponent } from './sections/section-profit-margins/section-profit-margins.component';
import { SectionTrainingMethodsComponent } from './sections/section-training-methods/section-training-methods.component';
import { SectionHomeComponent } from './sections/section-home/section-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionAuctionHouseComponent,
    SectionProfitMarginsComponent,
    SectionTrainingMethodsComponent,
    SectionHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
