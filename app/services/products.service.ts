import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Product } from '../models/product';

@Injectable()
export class ProductsService{
  private baseUrl: string = 'https://gks-dev.azurewebsites.net/api';

  constructor(private http : Http){
  }

  getAll(): Observable<Product[]>{
    let films$ = this.http
      .get(`${this.baseUrl}/products`, {headers: this.getHeaders()})
      .map(mapProducts)
      .catch(handleError);
      return films$;
  }

  get(id: string): Observable<Product> {
    let film$ = this.http
      .get(`${this.baseUrl}/products/${id}`, {headers: this.getHeaders()})
      .map(mapProduct)
      .catch(handleError);
      return film$;
  }

  save(film: Product) : Observable<Response>{
    return this.http
      .put(`${this.baseUrl}/films/${film.id}`, JSON.stringify(film), {headers: this.getHeaders()})
      .catch(handleError);
  }

  delete(film:Product){
    this.http
    .delete(`${this.baseUrl}/films/${film.id}`, {headers: this.getHeaders()})
    .catch(handleError)
  }
  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', 'Basic ' + btoa('ADMIN:rut80ger'))
    return headers;
  }
  
}

function mapProduct(response:Response): Product{
  // toPerson looks just like in the previous example
  return toFilm(response.json());
}

function mapProducts(response:Response): Product[]{
   return response.json().results.map(toFilm)
}

function toFilm(r:any): Product{
  let product = <Product>({
    name: r.Name,
    
});
  console.log('Parsed product:', product);
  return product;
}

function handleError (error: any) {
  let errorMsg = error.message || `Unexpected product error!!`
  console.error(errorMsg);
  return Observable.throw(errorMsg);
}
