/**
 * Created by private on 08/04/2017.
 */

import { Component, Input } from '@angular/core';
import { User } from './entities/user';
@Component({
    selector: 'user-details',
    template: `
    <div *ngIf="user">
        <h1>{{title}}</h1>
        <h2>{{user.name}} details!</h2>
        <div><label>id: </label>{{user.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="user.name" placeholder="name">
          <a href="" routerLink="/edit-user/{{user.id}}">Edit</a>
        </div>
    </div>
    `
})
export class UserDetailsComponent {
    title = 'details!';
    @Input() user: User;
}

