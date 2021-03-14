import { NextFunction, Request, Response, Router } from 'express';
import Eval from '../controllers/Eval';
import express from 'express'

class EvalRouter {
    private _router = Router();
    private _controller = Eval;

    get router() {
        return this._router;
    }

    constructor() {
        const app = express();
      //  const bodyParser = require('body-parser');
      //  app.use(bodyParser.urlencoded({extended: false}));
      //  app.use(bodyParser.json());
        this._configure();
    }

    /**
     * Connect routes to their matching controller endpoints.
     */
    private _configure() {
        const path = require('path');

        this._router.get('/', (req: Request, res: Response) => {
            res.status(200).sendFile(path.join(__dirname+'/../public/index.html'));
        })

        this._router.post('/evaluate', async (req: Request, res: Response) => {
          //  console.log(req.query);
            console.log(req.body);

          //  console.log(req.headers);
            const evaluator = new Eval();
            let result = await evaluator.evaluate(req.body['body']);
            res.status(200).send(result);
        });

        this._router.get('/js', (req: Request, res: Response, next: NextFunction) => {
            res.status(200).sendFile(path.join(__dirname+'/../public/index.js'));
        })
    }
}

export = new EvalRouter().router;
