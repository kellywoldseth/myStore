import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  username: string = '';
  userAddress: string = '';
  userCC: string = '';

  getUsername(): string
  {
    return this.username;
  }

  updateUsername(name: string): void
  {
    this.username = name;
  }
}
