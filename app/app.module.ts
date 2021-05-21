import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculationService } from './calculation.service';
import { CoreModule } from './core';
import { NewItemFormModule } from './new-item-form';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [CoreModule, BrowserModule, ReactiveFormsModule, NewItemFormModule],
  providers: [CalculationService]
})
export class AppModule {}
