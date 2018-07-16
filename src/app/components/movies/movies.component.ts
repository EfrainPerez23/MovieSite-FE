import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/global/models/Movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor() {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    const n = 10;

    for (let i = 0; i < n; i++) {
      this.movies.push(
        new Movie(
          i,
          'movie' + i,
          [],
          '',
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/7dAh80ydoWvUaBE8uFYkp9WsoSC.jpg',
          ''
        )
      );
    }
  }
}
