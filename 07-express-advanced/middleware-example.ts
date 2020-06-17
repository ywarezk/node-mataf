import createApplication from 'express';

const app = createApplication();

function greetingMiddlewareCreator(name: string) {
    return function(req, res, next) {
        res.send(`hello ${name}`)
    }
}

function authenticationCreator(authenticator) {
    return function(req, res, next) {
        if (authenticator.authenticate()) {
            req.user = {firstName: 'yariv', lastName: 'Katz'}
            next()
        } else {
            next(new Error('user is not authorized'));
        }
    }
}

app.get('/hello', greetingMiddlewareCreator('Yariv'));

app.get('/hello-eli', greetingMiddlewareCreator('Eli'));

app.get('/hello-isca', greetingMiddlewareCreator('isca'));

// /api/authenticated
// api/authenticated/users
// api/authenticated/dashboard

// all request types: get, post, put, delete, ...
// all urls that start  /api/authenticated
app.use('/api/authenticated', authenticationCreator({authenticate: () => true}));
app.use(authenticationCreator({authenticate: () => true}))

app.get('/stam', function(req, res) {
    res.json(req.user);
})