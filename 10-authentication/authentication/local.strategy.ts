/**
 * we are configuring passport
 * for authentication strategy
 * username / password
 */

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import {UserService} from '../services/user.service';

// req.user
// passport.authenticate('local') => function(req, res, next) {}
passport.use(new LocalStrategy(function(email, password, done) {
    const user = UserService.getInstance().authenticate(email, password);
    if (!user) {
        done(null, false);
    } else {
        done(null, user);
    }
}));

