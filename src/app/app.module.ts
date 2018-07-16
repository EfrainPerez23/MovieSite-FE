import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { SearchbarService } from './searchbar.service';
import { FormsModule } from '@angular/forms';
import { MoviesService } from './movies.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule, FormsModule],
  providers: [SearchbarService, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
