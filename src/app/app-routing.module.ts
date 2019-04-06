
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { AcconodationComponent } from './acconodation/acconodation.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
{path: 'acconodation', component: AcconodationComponent},
{path: 'celebration', component: CelebrationsComponent},
{path: 'food-and-beverage', component: FoodAndBeverageComponent},
{path: 'lifestyle', component: LifestyleComponent},
{path: 'weddings', component: WeddingsComponent},
{path: 'offers', component: OffersComponent},
{path: 'signin', component: SigninComponent },
{path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
