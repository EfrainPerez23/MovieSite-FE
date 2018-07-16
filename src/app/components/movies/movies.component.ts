import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/global/models/Movie.model';
import { SearchbarService } from '../../searchbar.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  searchText: string;

  public constructor(private searchService: SearchbarService) {
    this.searchService.searchText.subscribe(val => {
      this.searchText = val;
    });
  }

  public ngOnInit(): void {
    this.loadMovies();
  }

  ngOnDestroy(): void {
    this.searchService.searchText.unsubscribe();
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
