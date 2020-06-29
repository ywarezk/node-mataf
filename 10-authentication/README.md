## Authentication

Authentication
1. Who are you?

Authorization
2. What am I allowed to do ?

## Different authentication ways

different strategies:

- Username / email + Password
- token - JWT
- OTP
- Facebook
- LinkedIn
- Github
- Bitbucket
- oauth2
- Google

we can divide the strategies to two groups
- group that use session
- group that doesn't session

## Passport

passport is used to authenticate the user
because it's popular it can be used for every type of authentication
passport is using the strategy pattern to solve every common authentication.

- middleware creator

```
app.use(passport())
```

- extending the req object

req.user

- Strategy

can get different strategy for different authentication

```
app.use(passport({
    strategy: JwtStrategy()
}));
```

i can load different (multiple) strategies

### JWT

- Our backend express application will prepare every user a token jwt token
  - our backend will make the token using this library: https://www.npmjs.com/package/jsonwebtoken
- Our client will get the token and send it in every request in the headers
  - Authorization: Bearer <token>

The protocol is defined in this site:
https://jwt.io/



### EX.

- continuing the user rest server
- only authenticated users can send requests to the /api/users
- jwt authentication
- add an email and password for every user like we did here: https://github.com/ywarezk/node-mataf/tree/master/10-authentication

- create a rest login api in the url: post /api/login
- email, password you will have to use the local strategy to confirm the user
- if user is authenticated you send that user jwt token
- client sends the jwt token he can view the /api/users