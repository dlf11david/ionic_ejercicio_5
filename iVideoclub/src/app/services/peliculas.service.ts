import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private peliculas: {
    title: string,
    year: string,
    director: string,
    poster: string,
    synopsis: string} [];


  constructor() { 

    this.peliculas = [
      {
        title: 'El padrino',
        year: '1972',
        director: 'Francis Ford Coppola',
        poster: 'el_padrino.jpg',
        synopsis: 'Synopsis de ejemplo'
      },
      {
        title: 'El padrino. Parte II',
        year: '1974',
        director: 'Francis Ford Coppola',
        poster: 'el_padrino_2.jpg',
        synopsis: 'Synopsis de ejemplo'
      },
      {
        title: 'La lista de Schindler',
        year: '1993',
        director: 'Steven Spielberg',
        poster: 'la_lista_de_schindler.jpg',
        synopsis: 'Synopsis de ejemplo'
      },
      {
        title: 'Pulp Fiction',
        year: '1994',
        director: 'Quentin Tarantino',
        poster: 'pulp_fiction.jpg',
        synopsis: 'Synopsis de ejemplo'
      },
      {
        title: 'Cadena perpetua',
        year: '1994',
        director: 'Frank Darabont',
        poster: 'cadena_perpetua.jpg',
        synopsis: 'Synopsis de ejemplo'
      }
    ]
      
  }

  getPeliculas(): any[] {
    return this.peliculas;
  }

  getPelicula(id: number): any {
    return this.peliculas[id];
  }


}
