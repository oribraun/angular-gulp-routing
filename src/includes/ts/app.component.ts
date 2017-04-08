import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a routerLink="" routerLinkActive="active">Home</a>
      <a routerLink="/dynamic-input" routerLinkActive="active">Dynamic Input</a>
      <a routerLink="/users-list" routerLinkActive="active">Users List</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent  { name = 'Angular Router'; }
