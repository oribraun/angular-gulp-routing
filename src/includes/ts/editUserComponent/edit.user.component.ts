/**
 * Created by private on 08/04/2017.
 */

import { Component, Input, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
@Component({
    selector: 'edit-user',
    templateUrl : 'public/ts/editUserComponent/edit-user.html'
})
export class EditUserComponent implements OnInit {
    title = 'user';
    @Input() user: User;
    constructor(
        private route: ActivatedRoute,
        private usersService : UsersService
    ) {}
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.setUser(parseInt(params['id']));
        });
    }
    setUser(id:number): void {
        this.usersService.getUser(id).then(user => this.user = user);
    }
}

