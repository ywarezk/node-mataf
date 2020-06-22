/**
 * user service manage a list of users
 */

import { User } from "../models/user";

export class UserService {
    private _users: User[] = [
        new User(1, 'Yariv', 'Katz'),
        new User(2, 'Piglet', 'Chaitovski'),
        new User(3, 'Sweetness', 'no last name')
    ]
    static instance: UserService | null = null;

    private constructor() {

    }

    static getInstance() {
        if (UserService.instance) return UserService.instance;

        // instance is null
        UserService.instance = new UserService();
        return UserService.instance;
    }

    getUser = (id: number): User | null => {
        return this._users.find((user) => {
            return user.id === id;
        })
    }

    createUser = (user: User) => {
        this._users.push(user);
    }

    deleteUser = (id: number) => {
        // let counter = 0;
        // for (const user of this._users) {
        //     if (user.id === id) {
        //         break;
        //     }
        //     counter++;
        // }
        // this._users.splice(counter, 1);

        this._users = this._users.filter((user) => {
            return user.id !== id;
        });
    }

    // {firstName: '...', lastName: '...'}
    updateUser = (id: number, updateFields: Partial<User>) => {
        for (const user of this._users) {
            if (user.id === id) {
                Object.assign(user, updateFields);
            }
        }
    }


}