import dotenv from 'dotenv';
import express from 'express';
import MasterRouter from './routers/MasterRouter';


// load the environment variables from the .env file
dotenv.config({
    path: '.env'
});

/**
 * Express server application class.
 */
class Server {
    public app = express();
    public router = MasterRouter;
}

// initialize server app
const server = new Server();
const cors = require('cors');
const bodyParser = require('body-parser')
server.app.use(cors());
server.app.use(bodyParser.json());  // for POST
server.app.use(bodyParser.urlencoded({extended: false})); // for POST
server.app.use(express.static('src/public')); // for index files
server.app.use('/', server.router);

// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
