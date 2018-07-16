import { Component, OnInit } from '@angular/core';
import { SearchbarService } from '../../searchbar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private _active: boolean;
  searchText: string;

  public constructor(private searchService: SearchbarService) {}

  public ngOnInit(): void {}

  public get active(): boolean {
    return this._active;
  }

  public set active(_active: boolean) {
    this._active = _active;
  }

  public updateSearch(_searchText: string) {
    this.searchService.searchText.next(_searchText);
  }
}
