import { strictEqual } from 'assert';
import app from '../app';
import { Server } from 'http';
import axios, {AxiosResponse} from 'axios';
import { UserService } from '../services/user.service';

describe.only('users REST api', function() {
    let server: Server

    // hooks
    // hooks are used to setup things before our tests
    // we need to launch our server before running the tests

    // launch our server
    beforeEach((done) => {
        server = app.listen(3000, function() {
            done();
        })
    });

    afterEach((done) => {
        server.close(function() {
            done();
        });
    })

    // beforeEach(() => {

    // });

    // before(() => {

    // });

    // afterEach(() => {

    // });

    // after(() => {

    // })

    it.only('create user', async function() {
        // call something, expect the right output
        // hello world === hello world
        // assertion library - chai,  
        // strictEqual('hello world', 'hello world1');

        const response: AxiosResponse = await axios.post('http://localhost:3000/api/users', {
            id: 4,
            firstName: 'hello',
            lastName: 'world'
        });
        strictEqual(response.status, 201);
        strictEqual(response.data.firstName, 'hello');
        // UserService.getInstance().getUser()
    });

    it('update user', () => {

    })

})