import { Component } from '@angular/core';
import { _ } from '@c8y/ngx-components';
import { User } from './user.model';

@Component({
  selector: 'users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
    informationText: string = '';
    users: User[];
  //  test: string ; 

    // Inject SuperheroService
    constructor() {
        this.informationText = _('Use the global actions (top right corner) to add a user');
        //this.superheros = this.superheroService.herosToDisplay;
      //  this.test = 'Testing test'; 
      this.users = []; 
    }

    // removes always the last superhero
    removeUser() {
        //this.superheroService.removeHero(this.superheros.length - 1);
    }
}
