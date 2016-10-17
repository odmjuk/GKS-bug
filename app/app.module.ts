import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './components/app/app.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { OrderButtonsComponent } from './orders/order-buttons.component'
import { ProductSpecComponent } from './components/product-spec/product-spec.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule, Ng2Bs3ModalModule, FormsModule],
  declarations: [ AppComponent, FilmsListComponent, OrderButtonsComponent, ProductSpecComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
