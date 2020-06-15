/**
 * create a REST server sending users and deleting users
 */

import createApplication, { Application, Request, Response } from 'express';
import { UserService } from './services/user.service';

const app: Application = createApplication();

// /api/users/hello
app.get('/api/users/:id(\\d+)', function(req: Request, res: Response) {
    const id: string = req.params['id'];
    const user = UserService.getInstance().getUser(parseInt(id));
    res.status(200).json(user);
});

app.delete('/api/users/:id', function(req: Request, res: Response) {
    const id: string = req.params['id'];
    UserService.getInstance().deleteUser(parseInt(id));
    res.sendStatus(204);
});

app.listen(3000, function() {
    console.log('we are now listening on port 3000');
});