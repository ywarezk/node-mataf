import createApplication, {Application, Response} from 'express';
import cookieParser from 'cookie-parser';

const app: Application = createApplication();

// cookies.
// cookie is a header
// this header is sent automatically by the browser
// either our server or the browser determine the content of the cookie
// mataf.com can set a cookie for its own domain, subdomain stam.mataf.com, path: mataf.com/hello
// 

// i decide the value of the cookie and when the client will send the cookie
// client sends the cookie automatically

app.use(cookieParser());

app.get('/hello', function(req, res: Response) {
    // save some data about the user
    res.cookie('hello', 'world');
    res.send('hello world');
});

app.get('/dashboard', function(req, res) {
    // retrieve the data that we saved and display it
    
    res.send('something from cookies ' + req.cookies['hello']);
})

// using cookies
// header is sent automatically by the browser

app.listen(3000, function() {
    console.log('we are now listening...');
})