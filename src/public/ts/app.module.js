"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var router_1 = require("@angular/router"); // <-- for routing
var app_component_1 = require("./app.component");
var app_dynamic_input_1 = require("./app.dynamic.input");
var not_found_component_1 = require("./not-found-component");
var app_home_component_1 = require("./app.home.component");
var users_list_component_1 = require("./users.list.component");
var edit_user_component_1 = require("./editUserComponent/edit.user.component");
var user_details_component_1 = require("./user.details.component");
var users_service_1 = require("./services/users.service");
var appRoutes = [
    { path: 'dynamic-input', component: app_dynamic_input_1.DynamicInputComponent },
    { path: 'users-list', component: users_list_component_1.UsersListComponent },
    { path: 'edit-user/:id', component: edit_user_component_1.EditUserComponent },
    {
        path: '',
        component: app_home_component_1.HomeComponent,
        data: { title: 'Home' }
    },
    { path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    { path: '**', component: not_found_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, app_dynamic_input_1.DynamicInputComponent, not_found_component_1.PageNotFoundComponent, app_home_component_1.HomeComponent, users_list_component_1.UsersListComponent, edit_user_component_1.EditUserComponent, user_details_component_1.UserDetailsComponent],
        providers: [users_service_1.UsersService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
