/**
 * authenticate the user with email and password
 * using passport
 */

 // req.body
import createApplication, {json, urlencoded} from 'express';
import './authentication/local.strategy';
import passport from 'passport';
import { User } from './models/user';

const app = createApplication();

app.use(json());
app.use(urlencoded());
app.use(passport.initialize());

// passport.use()
// passport.authenticate('local') => function(req, res, next) {}
// passport.authenticate('activedirectory') => function(req, res, next) {}
// passport.authenticate('jwt') => function(req, res, next) {}
// req.user
app.post('/login', passport.authenticate('local', {session: false}));

app.post('/login', function(req, res) {
    const user = req.user as User;
    
    // i can make the token here and send it to the user
    

    res.send('user is logged in ' + user.firstName);
});

// app.use('/api/users', passport.authenticate('jwt', {session: false}));


app.listen(3000, function() {
    console.log('listening...');
});

