import createApplication, { Application } from 'express';
import axios, { AxiosResponse } from 'axios';


const app: Application = createApplication();

app.get('/tasks', async function(req, res) {
    // send a request using axios
    const response: AxiosResponse = await axios.get('https://nztodo.herokuapp.com/api/task/?format=json')
    res.json(response.data);
});

app.listen(3000, function() {
    console.log('we are now listening on 3000');
})