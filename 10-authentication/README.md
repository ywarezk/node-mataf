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



