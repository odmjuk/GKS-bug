import { Component, OnInit } from '@angular/core';
import { FilmsListComponent } from '../films-list/films-list.component'
import { FilmsService } from '../../services/films.service'
import { ProductsService } from '../../services/products.service'
import { OrderButtonsComponent } from '../../orders/order-buttons.component'
import { ProductSpecComponent} from '../product-spec/product-spec.component'
import { Film }from '../../models/film'
import { Product } from '../../models/product'

@Component({
  selector: 'simulink-integration',
  templateUrl: 'app/components/app/app.component.html',
  providers: [FilmsService, ProductsService]
})
export class AppComponent implements OnInit{ 
  product:Product;
  errorMessage:string;
  isLoading:boolean = true;

  constructor(private productsService : ProductsService){}

  ngOnInit(){
   this.productsService
     .get('6A4F79B8-435F-47E4-8D80-A5D8009FCD19')
      .subscribe(
        /* happy path */ p => this.product = p,
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => this.isLoading = false);
  }
}
