import { Component, Input } from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'product-spec',
  templateUrl: 'app/components/product-spec/product-spec.component.html',
  styleUrls: ['app/components/product-spec/product-spec.component.css'],
})
export class ProductSpecComponent {
  @Input() currentProduct: Product; 
  film : Film = {id:1, producer:'David', title:'DavidsFilm'};
}
