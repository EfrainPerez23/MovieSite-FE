import { Injectable } from '@angular/core';
import { User } from './global/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    new User(1, 'pedro', 'perez', '12345', 'pedro@perez.com', [], []),
    new User(2, 'caca', 'caca', '12345', 'caca@perez.com', [], [])
  ];

  add(user: User) {
    this.users.push(user);
  }

  getUsers() {
    return this.users.slice();
  }

  getUser(id: number) {
    return this.users.filter(user => user.id === id);
  }

  deleteUser(id: number) {}
}
