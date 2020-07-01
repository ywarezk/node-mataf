# Databases

data storage problem

## How our data will look like

lets arrange our data in tables

- ERD

arrange my tables I will find out that there is a connection
between the tables relations / association

users
dogs

### What kind of relations do we have between tables

- one2one

```
{
    firstName: 'Yariv',
    dog: {
        name: 'Piglet'
    }
}
```

- one2many

```
{
    firstName: 'Yariv',
    dogs: [
        {name: 'Piglet'},
        {name: 'Sweetness'},
    ]
}
```

- many2many

```
user
{
    id: 1
    firstName: 'Yariv',
    dogs: [
        100
    ]
}

dog
{
    id: 100,
    name: 'Piglet',
    users: [
        2,3,4,1
    ]
}
```

## Query analysis

we need to answer a few questions about each table

- Insert, Read, Update, Delete
- Is a tableA comes with another tableB

- select (title, description) from tableA JOIN...

## What db should i choose for storing my data?

1. Relational database, SQL.

MySQL, Postgres, Oracle, MariaDb

our data is arranged in:
- db
- tables
- rows
- columns

table structure is well defined by a schema

2. Non relational / NoSQL

Mongo, CouchDb, DynamoDb, casandra,

our data is arranged in:
- db
- collections
- documents
- fields

documents are json based and dynamic

```
{ _id: ObjectId(), title: '...', hello: '...'},
{ _id: ObjectId(), title: 10, description: true}
```

3. Memory bases db's

- redis, memcached

4. Graph

- Neo4J

### ORM

Object relational mapping

typescript ---> ORM ---> DB

```

class User {

}

```

1. Database agnostic
2. OOP that we already know to interact with the database

sometimes the complex query the orm fucks up

mongoose
typeorm 

we will work with typeorm and sqlite

To use ORM you will need to do the following:

1. npm install typeorm
2. npm install sqlite3
3. we will have to install mongo community server
4. connect to a running db
5. Define class that will mapped to our tables and collection
6. interaction with the db is by using the orm classes

## Relations

- one2one
- one2many
- many2many

### One2One in relational SQL based

users
| dogId    | firstName ... 
|   2


dogs
| id      | name
|  2      | piglet

### one2one mongo

```
user
{
    firstName: 'Yariv',
    dog: {
        name: 'piglet'
    }
}
```

```

user
{
    firstName: 'Yariv',
    dog: ObjectId('1')
}

dog
{
    name: 'Piglet',
    _id: ObjectId('1')
}

```

```
user
{
    firstName: 'Yariv',
    dog: {
        _id: ObjectId('1'),
        name: 'Piglet'
    }
}


dog
{
    _id: ObjectId('1'),
    name: 'Piglet',
    ...
}
```

### One2Many

- relational database

users
| id     | firstName
   1        Yariv

dogs
| id     | name          | userId
   2       Pigletshvily      1
   3       Sweetness         1

```
user
{
    firstName: 'yariv',
    dogs: [
        {_id, name: 'Piglet'},
        {_id, name: 'Sweetness'}
    ]
}
```

```
dogs
{
    _id: ...,
    name: 'Piglet',
    userId: ObjectId(...)
}

user
{
    ...
    dogs: [
        {_id: ObjectId(), name: ''},

    ]
}
```

### Many2Many

- Relational many2many

usersDogs
| id      | userId      | dogId
   1          1             2
   2          1             3
   3          10            3

users
| id     | firstName
   1     |  Yariv
   10    |  Yoni

dogs
| id     | name          
   2       Pigletshvily
   3       Sweetness   

Mongo
less collections
less joins
more duplicate data



