/**
 * Session
 * 
 * in session we can set data in request A
 * retrieve the data in request B
 * 
 * Data is saved in the server
 * data is not seen by the client
 * 
 * 
 */

import createApplication, {Application, Request, Response} from 'express';
import session from 'express-session';

const app: Application = createApplication();


// req.session
/**
 * session id | data
 *     1         { 'hello': 'world' }
 * 
 * cookie in the first time will be empty
 * the server will make a session id: 1
 * res.cookie('connect.sid', 'asdfasdf@#42342Sdfsdf')
 */
app.use(session({
    secret: process.env.SESSION_SECRET || 'stam secret',
    rolling: true,
    cookie: {
        maxAge: 1000 * 60 * 60 ,
        sameSite: true ,
        secure: true  
    }
}))

app.get('/hello', function(req: Request, res: Response) {
    (req as any).session['hello'] = 'world';
    res.send('hello world');
});

app.get('/dashboard', function(req: Request, res: Response) {
    res.send('something from session ' + (req as any).session['hello']);
});

app.listen(3000, function() {
    console.log('we are now listening...');
});

