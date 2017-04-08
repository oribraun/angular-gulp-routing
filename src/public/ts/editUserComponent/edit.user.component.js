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
var user_1 = require("../entities/user");
var router_1 = require("@angular/router");
var users_service_1 = require("../services/users.service");
var EditUserComponent = (function () {
    function EditUserComponent(route, usersService) {
        this.route = route;
        this.usersService = usersService;
        this.title = 'user';
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.setUser(parseInt(params['id']));
        });
    };
    EditUserComponent.prototype.setUser = function (id) {
        var _this = this;
        this.usersService.getUser(id).then(function (user) { return _this.user = user; });
    };
    return EditUserComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], EditUserComponent.prototype, "user", void 0);
EditUserComponent = __decorate([
    core_1.Component({
        selector: 'edit-user',
        templateUrl: 'public/ts/editUserComponent/edit-user.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        users_service_1.UsersService])
], EditUserComponent);
exports.EditUserComponent = EditUserComponent;

//# sourceMappingURL=edit.user.component.js.map
