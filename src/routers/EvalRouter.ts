import { Request, Response, Router } from 'express';
import Eval from '../controllers/Eval';

class EvalRouter {
    private _router = Router();

    get router() {
        return this._router;
    }

    constructor() {
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

        // POST, end-point evaluates Lego formula and returns result to requester
        this._router.post('/evaluate', async (req: Request, res: Response) => {
            const evaluator = new Eval();
            const result = await evaluator.evaluate(req.body['body']);
            res.status(200).send(result);
        });
    }
}

export = new EvalRouter().router;
