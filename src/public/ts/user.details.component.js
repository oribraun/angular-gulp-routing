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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("./entities/user");
var UserDetailsComponent = (function () {
    function UserDetailsComponent() {
        this.title = 'details!';
    }
    return UserDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], UserDetailsComponent.prototype, "user", void 0);
UserDetailsComponent = __decorate([
    core_1.Component({
        selector: 'user-details',
        template: "\n    <div *ngIf=\"user\">\n        <h1>{{title}}</h1>\n        <h2>{{user.name}} details!</h2>\n        <div><label>id: </label>{{user.id}}</div>\n        <div>\n          <label>name: </label>\n          <input [(ngModel)]=\"user.name\" placeholder=\"name\">\n          <a href=\"\" routerLink=\"/edit-user/{{user.id}}\">Edit</a>\n        </div>\n    </div>\n    "
    })
], UserDetailsComponent);
exports.UserDetailsComponent = UserDetailsComponent;

//# sourceMappingURL=user.details.component.js.map
