/**
 * configure passport to use the jwt strategy
 */

import passport from 'passport';
import {Strategy, ExtractJwt} from 'passport-jwt';
import { UserModel } from '../entities/user/user.model';

// Authorization: Bearer <token>
// payload: { userId: 2 }
passport.use(
    new Strategy({
        secretOrKey: process.env.JWT_SECRET || 'secret',
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, 
    (payload, done) => {
        const userId = payload.userId;
        const user = UserModel.findById(userId);
        done(null, user);
    }
))