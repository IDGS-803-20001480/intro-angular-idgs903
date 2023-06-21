import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { idgsComponent } from './utl/idgs.component';
import { ievnComponent } from './utl/ievn.component';
import { Ievn2Component } from './utl/ievn2/ievn2.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './utl/formularios/operas/operas.module';
//import { OperasBasComponent } from './utl/formularios/operas-bas/operas-bas.component';

/* import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; */

@NgModule({
  declarations: [
    AppComponent,
    idgsComponent,
    ievnComponent,
    Ievn2Component,
    SumaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule //importa el modulo de operas para que se pueda usar en el app.component.html
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
