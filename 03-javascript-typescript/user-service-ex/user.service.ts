/**
 * UserService
 * manage array of users
 * CRUD
 * singleton
 */

import { User } from "./user";

export class UserService {
    private _users: User[] = []
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
