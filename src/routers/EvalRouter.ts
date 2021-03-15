import { NextFunction, Request, Response, Router } from 'express';
import Eval from '../controllers/Eval';
import express from 'express'

class EvalRouter {
    private _router = Router();

    get router() {
        return this._router;
    }

    constructor() {
        const app = express();
        this._configure();
    }

    /**
     * Connect routes to their matching controller endpoints.
     */
    private _configure() {
        const path = require('path');

        // GET
        this._router.get('/', (req: Request, res: Response) => {
            res.status(200).sendFile(path.join(__dirname+'/../public/index.html'));
        })

        // POST
        this._router.post('/evaluate', async (req: Request, res: Response) => {
            const evaluator = new Eval();
            let result = await evaluator.evaluate(req.body['body']);
            console.log('RES '+ result);
            res.status(200).send(result);
        });

        // GET
        this._router.get('/js', (req: Request, res: Response) => {
            res.status(200).sendFile(path.join(__dirname+'/../public/index.js'));
        })

        /* GET FOR CSS
        this._router.get('/css', (req: Request, res: Response) => {
            res.status(200).sendFile(path.join(__dirname+'/../../output.css'));
        }); */
    }
}

export = new EvalRouter().router;
