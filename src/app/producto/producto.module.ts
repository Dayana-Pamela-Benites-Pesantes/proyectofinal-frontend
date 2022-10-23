import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';


import { ProductoRoutingModule } from './producto-routing.module';
import { ListComponent } from './components/list/list.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import { CreateComponent } from './components/create/create.component';

import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent
    
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
   ReactiveFormsModule,
   //DatePipe
  ]
})
export class ProductoModule { }
