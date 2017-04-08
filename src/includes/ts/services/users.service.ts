/**
 * Created by private on 08/04/2017.
 */

import { Injectable } from "@angular/core";
import { User } from '../entities/user';

export const USERS: User[] = [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
];

@Injectable()
export class UsersService {
    //getUsers(): User[] {
    //    return USERS;
    //}
    getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }
    getUser(id:number):Promise<User> {
        var map = USERS.map(function(obj){return obj.id});
        var index = map.indexOf(id);
        return Promise.resolve(USERS[index]);
    }
}
