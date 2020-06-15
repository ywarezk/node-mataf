// how express is dealing with exception
// proper way to deal with exception

import createApplication, {Application, NextFunction, Request, Response} from 'express';

const app: Application = createApplication();

app.get('/', function(req, res, next) {
    // uncaught exception - node terminates process
    // express on uncaught exception will catch it for us and display the error
    // throw new Error('something happened');
    // res.send('hello world');

    setTimeout(() => {
        try {
            throw new Error('something happened');
            res.send('hello world with delay');
        } catch(err) {
            next(err)
        }
    }, 1000);

    // middleware can do one of the following:
    // - res.send()
    // next()
    // next(err)
});

// app.get('/', function() {

// })

// request -----|----|---|----->

// error middlewares ----|----|---|--->

// express has a default error handling
// express can only catch sync exception, if we have something async express will not catch it
// and the process will be terminated

app.use(function(err: Error, _req: Request, res: Response, _next: NextFunction) {
    res.send(err.message);
})

app.listen(3000);

// notify express of an exception next(err);
// app.use(function(err, res, res,next));