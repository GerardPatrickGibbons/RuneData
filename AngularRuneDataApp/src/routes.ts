import {Routes} from '@angular/router'
import { SectionAuctionHouseComponent } from './app/sections/section-auction-house/section-auction-house.component';
import { SectionHomeComponent } from './app/sections/section-home/section-home.component';
import { SectionProfitMarginsComponent } from './app/sections/section-profit-margins/section-profit-margins.component';
import { SectionTrainingMethodsComponent } from './app/sections/section-training-methods/section-training-methods.component';

export const appRoutes: Routes = [
    { path: 'Home', component: SectionHomeComponent},
    { path: 'AuctionHouse', component: SectionAuctionHouseComponent},
    { path: 'ProfitMargins', component: SectionProfitMarginsComponent},
    { path: 'TrainingMethods', component: SectionTrainingMethodsComponent},
    { path: '', redirectTo: '/Home', pathMatch: 'full'}
];