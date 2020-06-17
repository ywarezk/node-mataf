## Async programming in Javascript/Typescript

```
setTimeout(() => {
    console.log('async code example')
}, 1000)
```

```
setInterval(() => {
    console.log('async code example')
}, 1000)
```

callback hell

```
readFile('stam', () => {
    readFromDb(() => {
        setTimeout(() => {

        })
    })
})
```

```
await readFile...
await readFromDb..
await timer...
```

### classify your async code

```
readFile('stam', (err, data) => {

})
```

understand how many times the callback will be called?
1, inifinite, 100

understand if something is passed to the callback?

### Promise

### EX promises

- https://nztodo.herokuapp.com/api/task/?format=json
- create express application
- app.get('/tasks', async function(req, res, next) {

})
- send request to the above url using axios
- https://github.com/axios/axios

