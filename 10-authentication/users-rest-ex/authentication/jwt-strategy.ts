/**
 * configure passport to use the jwt strategy
 */

import passport from 'passport';
import {Strategy, ExtractJwt} from 'passport-jwt';
import { UserService } from '../services/user.service';

// Authorization: Bearer <token>
// payload: { userId: 2 }
passport.use(
    new Strategy({
        secretOrKey: process.env.JWT_SECRET || 'secret',
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, 
    (payload, done) => {
        const userId = payload.userId;
        const user = UserService.getInstance().getUser(userId);
        done(null, user);
    }
))