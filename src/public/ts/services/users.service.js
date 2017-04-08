/**
 * Created by private on 08/04/2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.USERS = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
var UsersService = (function () {
    function UsersService() {
    }
    //getUsers(): User[] {
    //    return USERS;
    //}
    UsersService.prototype.getUsers = function () {
        return Promise.resolve(exports.USERS);
    };
    UsersService.prototype.getUser = function (id) {
        var map = exports.USERS.map(function (obj) { return obj.id; });
        var index = map.indexOf(id);
        return Promise.resolve(exports.USERS[index]);
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable()
], UsersService);
exports.UsersService = UsersService;

//# sourceMappingURL=users.service.js.map
