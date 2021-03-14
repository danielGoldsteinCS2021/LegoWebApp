import {Router} from "express";
import EvalRouter from './EvalRouter';

class MasterRouter{
    private _router = Router();
    private _subrouter = EvalRouter;


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
        this._router.use('/', this._subrouter);
    }
}

export = new MasterRouter().router;
