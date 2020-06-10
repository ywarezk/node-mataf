import {UserService} from './user.service';
import { User } from './user';

const userService = UserService.getInstance();

userService.createUser(new User(1, 'Yariv', 'Katz'));

const user = userService.getUser(1);

console.log(user.firstName);

