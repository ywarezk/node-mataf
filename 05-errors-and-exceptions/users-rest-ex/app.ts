/**
 * create a REST server sending users and deleting users
 */

import createApplication, { Application, Request, Response, NextFunction } from 'express';
import { UserService } from './services/user.service';

const app: Application = createApplication();

// /api/users/hello
app.get('/api/users/:id(\\d+)', function(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params['id'];
    const user = UserService.getInstance().getUser(parseInt(id));
    if (!user) {
        next(new Error('no user'));
    } else {
        res.status(200).json(user);
    }
    
});

app.delete('/api/users/:id', function(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params['id'];
    const user = UserService.getInstance().getUser(parseInt(id));
    if (!user) {
        next(new Error('no user'));
    } else {
        UserService.getInstance().deleteUser(parseInt(id));
        res.sendStatus(204);
    }    
});

app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err.message === 'no user') {
        res.status(404).send('no user');
    } else {
        res.status(500).send('application error');
    }
});

app.listen(3000, function() {
    console.log('we are now listening on port 3000');
});