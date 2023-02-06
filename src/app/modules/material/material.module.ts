import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule, MatFormFieldControl, MatFormField} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports: [
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatFormField,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule
  ]

})
export class MaterialModule { }
