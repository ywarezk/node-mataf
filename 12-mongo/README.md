## MongoDB

1. Install mongo - https://www.mongodb.com/try/download/community
2. open in cmd C:\Program Files\MongoDB\Server\4.2\bin
3. create the directory c:\data\db
4. mongod.exe

## mongoose

1. install mongoose using npm

```
> npm init --yes
> npm install mongoose
```

2. define your schema
schema is how our document looks like
which fields we have and what are the fields types

3. you take the schema and create a model from that schema
model is going to create a collection and interact with a collection

4. connect to the database
mongo contains a function called connect which you can use to connect to the database

```
connect('mongodb://piglet:12345@localhost:27017/mataf-users');
connect(process.env.DATABASE_URL)
```

5. you can take the model and play with the db

## Typegoose

https://github.com/typegoose/typegoose

lets us create the schema by using typescript classes

## Summary

1. install mongoose typegoose

```
npm init --yes
npm install mongoose @typegoose/typegoose
```

1.1. install typescript

```
> npm install typescript -D
> npx tsc --init
```

in the tsconfig.json you will have to set:

```
"experimentalDecorators": true,
"emitDecoratorMetadata": true
```

2. install @types

```
npm install @types/node @types/mongoose -D
```

