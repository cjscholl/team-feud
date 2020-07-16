import { Router, Request, Response } from 'express';

export default class HealthApi {
    wire(): Router {
        const router = Router()
        router.get('/', this._getHealth.bind(this))
        return router;
    }
    _getHealth(req: Request, res: Response): void {
        res.status(200).end();
    }
}