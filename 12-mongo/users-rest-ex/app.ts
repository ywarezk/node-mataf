/**
 * create a REST server sending users and deleting users
 */

import createApplication, { Application, json, urlencoded } from 'express';
import passport from 'passport';
import './authentication/jwt-strategy';
import './authentication/local.strategy';
import usersRouter from './routes/users';
import exphbs from 'express-handlebars';
import {resolve} from 'path';
import authRouter from './routes/auth';
import {connect} from 'mongoose';

const app: Application = createApplication();

app.engine('hbs', exphbs());
app.set('view engine', 'hbs');
app.set('views', resolve(__dirname, 'views'));

connect('mongodb://localhost:27017/mataf-users')
    .catch(() => {
        console.error('failed to connect to db');
        process.exit(1);
    });

app.use(json());
app.use(urlencoded());
app.use(passport.initialize());

// step 1 authenticate for creating jwt token


// /api/users

// /api/tasks

// /api/guests

// step 2 authenticate with jwt token
app.use(authRouter);
app.use('/api/users', usersRouter);


// app.listen(3000, function() {
//     console.log('we are now listening on port 3000');
// });

export default app;


// new project
// import matafUsers from '...';

// app.use('/api/users', matafUsers)