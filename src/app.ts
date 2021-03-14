import dotenv from 'dotenv';
import express from 'express';
import { NextFunction, Request, Response, Router } from 'express';
import MasterRouter from './routers/MasterRouter';


// load the environment variables from the ..env file
dotenv.config({
    path: '..env'
});

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
    public app = express();
    public router = MasterRouter;
}

// initialize server app
const server = new Server();
const bodyParser = require('body-parser')
server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended: false}));
server.app.use('/', server.router);
server.app.set('view engine', 'pug');


// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
