import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/global/models/Movie.model';
import { SearchbarService } from '../../searchbar.service';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  searchText: string;

  public constructor(
    private searchService: SearchbarService,
    private movieService: MoviesService
  ) {
    this.searchService.searchText.subscribe(val => {
      this.searchText = val;
    });
  }

  public ngOnInit(): void {
    this.movies = this.movieService.getAll();
  }

  ngOnDestroy(): void {
    this.searchService.searchText.unsubscribe();
  }
}
