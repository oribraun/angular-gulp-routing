/**
 * Created by private on 08/04/2017.
 */
import { Component } from '@angular/core';
import { User } from './entities/user';
import { UsersService } from './services/users.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'users-list',
    template: `
    <h1>{{title}}</h1>
    <h2>Users</h2>
    <ul class="users">
      <li *ngFor="let user of users"
        [class.selected]="user === selectedUser"
        (click)="onSelect(user)">
        <span class="badge">{{user.id}}</span> {{user.name}}
      </li>
    </ul>
    <user-details [user]="selectedUser"></user-details>
  `,
})
export class UsersListComponent implements OnInit {
    title = 'List Of Users';
    users: User[];
    selectedUser: User;
    constructor(private usersService: UsersService) { }
    getHeroes(): void {
        this.usersService.getUsers().then(users => this.users = users);
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    onSelect(user: User): void {
        if(this.selectedUser && this.selectedUser.id == user.id) {
            this.selectedUser = new User();
        } else {
            this.selectedUser = user;
        }
    }
}

