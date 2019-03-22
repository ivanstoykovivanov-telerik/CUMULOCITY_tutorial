import { Injectable } from '@angular/core';
import { _ } from '@c8y/ngx-components';
import { User } from './user.model';

/**
 * The UserService holds a list of predefined Useres.
 * With the help of this service you can add a predefined hero
 * to the array of heroes that should be available and you can remove a hero
 * from this array.
 */
@Injectable()
export class UserService {
    /** Mandantory for a User is:
     * - name (string)
     * - gender (string)
     * - power (string)
     */
    private usersToDisplay: User[];
    private users: User[];

    constructor() {
        this.usersToDisplay = [];
        this.users = [
            {
                id: 1, 
                name: 'Captain America',
                isActive: true
            },
            {
                id: 2, 
                name: 'Spider-Man',
                isActive: true
            },
            {
                id: 3, 
                name: 'Gamora',
                isActive: true
            }
        ];
    }

    // Adds a predefined hero randomly.
    addUser() {
        this.usersToDisplay.push(this.users[this.getRandomInt(0, this.users.length - 1)]);
    }

    // Removes a hero with given index.
    removeUser(index: number) {
        if (index >= 0 && index <= this.usersToDisplay.length - 1) {
            this.usersToDisplay.splice(index, 1);
        }
    }

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
