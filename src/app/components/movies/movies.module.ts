import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies.component';
import { MoviesRouting } from './movie-routing.module';
@NgModule({
  imports: [CommonModule, FormsModule, MoviesRouting],
  declarations: [MovieComponent, MoviesComponent]
})
export class MoviesModule {}
