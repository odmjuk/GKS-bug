import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Film } from '../models/film';

@Injectable()
export class FilmsService{
  private baseUrl: string = 'http://swapi.co/api';

  constructor(private http : Http){
  }

  getAll(): Observable<Film[]>{
    let films$ = this.http
      .get(`${this.baseUrl}/films`, {headers: this.getHeaders()})
      .map(mapFilms)
      .catch(handleError);
      return films$;
  }

  get(id: number): Observable<Film> {
    let film$ = this.http
      .get(`${this.baseUrl}/films/${id}`, {headers: this.getHeaders()})
      .map(mapFilm)
      .catch(handleError);
      return film$;
  }

  save(film: Film) : Observable<Response>{
    return this.http
      .put(`${this.baseUrl}/films/${film.id}`, JSON.stringify(film), {headers: this.getHeaders()})
      .catch(handleError);
  }

  delete(film:Film){
    this.http
    .delete(`${this.baseUrl}/films/${film.id}`, {headers: this.getHeaders()})
    .catch(handleError)
  }
  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  
}

function mapFilm(response:Response): Film{
  // toPerson looks just like in the previous example
  return toFilm(response.json());
}

function mapFilms(response:Response): Film[]{
   return response.json().results.map(toFilm)
}

function toFilm(r:any): Film{
  let film = <Film>({
    id: extractId(r),
    title: r.title,
    producer: r.producer,
});
  console.log('Parsed film:', film);
  return film;
}

function extractId(filmData:any){
  let extractedId = filmData.url.replace('http://swapi.co/api/films/','').replace('/','');
  return parseInt(extractedId);
}

function handleError (error: any) {
  let errorMsg = error.message || `Unexpected error!!`
  console.error(errorMsg);
  return Observable.throw(errorMsg);
}
