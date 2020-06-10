/**
 * backend app
 * listen for request
 * return response hello world
 * 
 */

import createApplication, {Application, Request, Response} from 'express';

// handles certain requests
const app: Application = createApplication();

app.get('/hello', function(req: Request, res: Response) {
    res.status(201).send('hello world');
});

app.post('/create', function(req, res) {
    res.status(200).json({
        hello: 'world'
    })
});

app.listen(3000, function() {
    console.log('we are now listening on port 3000');
});

