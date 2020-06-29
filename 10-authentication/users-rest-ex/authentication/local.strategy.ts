/**
 * configure passport for local authentication
 * local - username + password
 */

import passport from 'passport';
import { Strategy } from 'passport-local';
import { UserService } from '../services/user.service';

passport.use(new Strategy(function(username, password, done) {
    const user = UserService.getInstance().authenticate(username, password);
    done(null, user);
}))