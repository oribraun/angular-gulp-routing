/**
 * Created by private on 08/04/2017.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: `<h1>{{title}}</h1>
                <h1>Hello {{name}}</h1>`,
})
export class HomeComponent  { name = 'Home'; }

