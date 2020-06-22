/**
 * create a REST server sending users and deleting users
 */

import createApplication, { Application, Request, Response, json, urlencoded } from 'express';
import { UserService } from './services/user.service';

const app: Application = createApplication();

app.use(json());
app.use(urlencoded());

app.post('/api/users', function(req, res) {
    // req.body
    // ...
    // {id: ..., firstName: ..., lastName: ...}
    // always validate the user input
    UserService.getInstance().createUser(req.body);
    res.status(201).json(req.body);
});



app.route('/api/users/:id(\\d+)')
    .get(function(req, res) {
        const id: string = req.params['id'];
        const user = UserService.getInstance().getUser(parseInt(id));
        res.status(200).json(user);
    })
    .delete(function(req, res) {
        const id: string = req.params['id'];
        UserService.getInstance().deleteUser(parseInt(id));
        res.sendStatus(204);
    })
    .put(function(req, res) {
        // ... update a user
        const id: string = req.params['id'];
        UserService.getInstance().updateUser(parseInt(id), req.body);
        const user = UserService.getInstance().getUser(parseInt(id));
        res.status(202).json(user); 
    });

// app.listen(3000, function() {
//     console.log('we are now listening on port 3000');
// });

export default app;


// new project
// import matafUsers from '...';

// app.use('/api/users', matafUsers)