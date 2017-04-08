import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule, Routes } from '@angular/router'; // <-- for routing

import { AppComponent }  from './app.component';
import { DynamicInputComponent } from './app.dynamic.input';
import { PageNotFoundComponent } from './not-found-component';
import { HomeComponent } from './app.home.component';
import { UsersListComponent } from './users.list.component';
import { EditUserComponent } from './editUserComponent/edit.user.component';
import { UserDetailsComponent } from './user.details.component';

import { UsersService } from './services/users.service';

const appRoutes: Routes = [
  { path: 'dynamic-input', component: DynamicInputComponent },
  { path: 'users-list',      component: UsersListComponent },
  { path: 'edit-user/:id',      component: EditUserComponent },
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, DynamicInputComponent, PageNotFoundComponent, HomeComponent, UsersListComponent, EditUserComponent, UserDetailsComponent ],
  providers:    [ UsersService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
