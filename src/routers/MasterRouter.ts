import {Router} from "express";
import EvalRouter from './EvalRouter';

class MasterRouter{
    private _router = Router();
    private _evalrouter = EvalRouter;


    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    /**
     * Connect routes to their matching routers.
     */
    private _configure() {
        this._router.use('/', this._evalrouter);
    }
}

export = new MasterRouter().router;
