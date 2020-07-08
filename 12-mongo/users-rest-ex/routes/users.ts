import { Router } from 'express';
import passport from 'passport';
import {UserModel} from '../entities/user/user.model';
import bcrypt from 'bcrypt';

const usersRouter = Router();

// /api/users/api/users
// usersRouter.use('', passport.authenticate('jwt', {session: false}))

usersRouter.post('', async function(req, res) {
    // req.body
    // ...
    // {id: ..., firstName: ..., lastName: ...}
    // always validate the user input
    try {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10)
        const hashedPromise = await bcrypt.hash(password, salt);

        // {firstName: ..., email, password: hashedPassword}
        const user = new UserModel({...req.body, password: hashedPromise});
        
        await user.save()
        res.status(201).json(user);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
    
});



usersRouter.route('/:id')
    .get(async function(req, res) {
        const id: string = req.params['id'];
        try {
            const user = await UserModel.findById(id);
            res.status(200).json(user);
        } catch(err) {
            res.status(404).json({error: 'user not found'});
        }
        
    })
    .delete(async function(req, res) {
        const id: string = req.params['id'];
        await UserModel.deleteOne({_id: id});
        res.sendStatus(204);
    })
    .put(async function(req, res) {
        // ... update a user
        const id: string = req.params['id'];
        const user = await UserModel.updateOne({_id: id}, req.body);        
        res.status(202).json(user); 
    });

export default usersRouter;