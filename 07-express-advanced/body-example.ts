/**
 * how do we handle request body
 */

import createApplication, { Application, Request, json, urlencoded } from 'express';

const app: Application = createApplication();

// middleware creator
// req.body // {hello: world}
app.use(urlencoded())
app.use(json());

app.post('/tasks', function(req, res) {
    res.json(req.body);
})

app.listen(3000, function() {
    console.log('listening...');
})