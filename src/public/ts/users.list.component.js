"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by private on 08/04/2017.
 */
var core_1 = require("@angular/core");
var user_1 = require("./entities/user");
var users_service_1 = require("./services/users.service");
var UsersListComponent = (function () {
    function UsersListComponent(usersService) {
        this.usersService = usersService;
        this.title = 'List Of Users';
    }
    UsersListComponent.prototype.getHeroes = function () {
        var _this = this;
        this.usersService.getUsers().then(function (users) { return _this.users = users; });
    };
    UsersListComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    UsersListComponent.prototype.onSelect = function (user) {
        if (this.selectedUser && this.selectedUser.id == user.id) {
            this.selectedUser = new user_1.User();
        }
        else {
            this.selectedUser = user;
        }
    };
    return UsersListComponent;
}());
UsersListComponent = __decorate([
    core_1.Component({
        selector: 'users-list',
        template: "\n    <h1>{{title}}</h1>\n    <h2>Users</h2>\n    <ul class=\"users\">\n      <li *ngFor=\"let user of users\"\n        [class.selected]=\"user === selectedUser\"\n        (click)=\"onSelect(user)\">\n        <span class=\"badge\">{{user.id}}</span> {{user.name}}\n      </li>\n    </ul>\n    <user-details [user]=\"selectedUser\"></user-details>\n  ",
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersListComponent);
exports.UsersListComponent = UsersListComponent;

//# sourceMappingURL=users.list.component.js.map
