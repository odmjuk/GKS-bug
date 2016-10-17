import { Component } from '@angular/core';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'order-buttons',
  templateUrl: 'app/orders/order-buttons.component.html',
  providers: [FilmsService]
})
export class OrderButtonsComponent { }
