import {Router} from 'express';
import passport from 'passport';
import jsonwebtoken from 'jsonwebtoken';
import { User } from '../../models/user';

const authRouter = Router();

authRouter.get('/login', function(req, res) {
    // send the user html page of login
    res.render('login', {greetings: 'hello world', layout: false});
})

authRouter.post(
    '/login', 
    passport.authenticate('local', {session: false}),
    function(req, res) {
        // jwt token 
        
        const user = req.user as User;
        const userId = user.id;
        const token = jsonwebtoken.sign(
            // {userId: userId}
            {userId},
            process.env.JWT_SECRET || 'secret'
        );
        res.send(token);
    },
);

export default authRouter;