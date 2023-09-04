import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {appRoutes} from '../routes';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionAuctionHouseComponent } from './sections/section-auction-house/section-auction-house.component';
import { SectionProfitMarginsComponent } from './sections/section-profit-margins/section-profit-margins.component';
import { SectionTrainingMethodsComponent } from './sections/section-training-methods/section-training-methods.component';
import { SectionHomeComponent } from './sections/section-home/section-home.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionAuctionHouseComponent,
    SectionProfitMarginsComponent,
    SectionTrainingMethodsComponent,
    SectionHomeComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: 
  [
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
