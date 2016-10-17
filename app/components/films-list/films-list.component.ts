import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'films-list',
  template: `
  <section>
    <section *ngIf="isLoading && !errorMessage">
    Loading films...
    </section>
      <ul>
        <li *ngFor="let film of films">            
          {{film.title}}
        </li>
      </ul>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>
  `
})
export class FilmsListComponent implements OnInit{
  films: Film[] = [];
  currentFilm : Film;
  errorMessage: string = '';
  isLoading: boolean = false;
  

  constructor(private filmsService : FilmsService){}

  ngOnInit(){
   this.filmsService
     .getAll()
      .subscribe(
        /* happy path */ p => this.films = p,
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => this.isLoading = !loadingCompleted(this, this.films));
  }
}

function loadingCompleted(component:any, filmData:Film[]){
  component.currentFilm = filmData[0];
  return true;
}