import { Router } from 'express';
import passport from 'passport';
import { UserService } from '../services/user.service';

const usersRouter = Router();

// /api/users/api/users
usersRouter.use('', passport.authenticate('jwt', {session: false}))

usersRouter.post('', function(req, res) {
    // req.body
    // ...
    // {id: ..., firstName: ..., lastName: ...}
    // always validate the user input
    UserService.getInstance().createUser(req.body);
    res.status(201).json(req.body);
});



usersRouter.route('/:id(\\d+)')
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

export default usersRouter;