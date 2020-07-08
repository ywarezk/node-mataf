/**
 * configure passport for local authentication
 * local - username + password
 */

import passport from 'passport';
import { Strategy } from 'passport-local';
import {UserModel} from '../entities/user/user.model';
import bcrypt from 'bcrypt';

passport.use(new Strategy(async function(email: string, password: string, done) {
    const user = await UserModel.findOne({email})
    if (!user) {
        done(null, false);
    } else {
        const isLoggedIn = await bcrypt.compare(password, user.password);
        if (isLoggedIn) {
            done(null, user);
        } else {
            done(null, false);
        }
    } 
}))