import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RatingPageRoutingModule } from './rating-routing.module';
// import { IonicRatingModule } from 'ionic4-rating';
import { RatingPage } from './rating.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingPageRoutingModule
  ],
  declarations: [RatingPage],
  
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingPageModule {}
