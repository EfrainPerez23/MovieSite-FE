import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileModule } from './user-profile/user-profile.module';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  imports: [CommonModule, UserProfileModule, MoviesModule],
  declarations: []
})
export class ComponentsModule {}
