import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from '../../auth/auth.service';
import { User } from '../../global/models/User.model';
import { LocalStorageService } from '../../global/service/local-storage.service';
=======
>>>>>>> parent of e78e122... added login and signup behavior

interface MenuItems {
  title: string;
  icon: string;
  path: string;
}
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  private _menuItems: MenuItems[] = [];
  private _year: number;
<<<<<<< HEAD
  private _authenticated: { token: string | null; user: User | null } | null = {
    token: '',
    user: null
  };

  public constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {
=======

  public constructor() {
>>>>>>> parent of e78e122... added login and signup behavior
    this._menuItems = [
      { title: 'Trending', icon: 'fas fa-chart-line', path: 'movies' },
      { title: 'Recommend me', icon: 'fas fa-user', path: 'movies' },
      { title: 'Movies', icon: 'fas fa-chart-line', path: 'movies' },
      { title: 'Settings', icon: 'fas fa-cogs', path: 'user' }
    ];
    this._year = new Date().getFullYear();
<<<<<<< HEAD

    this._authenticated.token = this.localStorageService.getItem('token');
    this._authenticated.user = JSON.parse(
      this.localStorageService.getItem('user')
    );

    this.authService.isAuthenticated().subscribe(
      (_identity: { token: string | null; user: User | null } | null): void => {
        if (_identity) {
          this._authenticated = _identity;
        }
      }
    );
=======
>>>>>>> parent of e78e122... added login and signup behavior
  }

  public ngOnInit(): void {}

  public get menuItems(): MenuItems[] {
    return this._menuItems;
  }

  public get year(): number {
    return this._year;
  }

<<<<<<< HEAD
  public get authenticated(): {
    token: string | null;
    user: User | null;
  } | null {
    return this._authenticated;
  }
=======
>>>>>>> parent of e78e122... added login and signup behavior
}
