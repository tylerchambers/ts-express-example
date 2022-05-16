import { Request, Response, NextFunction, RequestHandler } from 'express';
import * as uuid from 'uuid';

export interface LoggedRequest extends Request {
    log?: any
}
  
export const NewLoggerMiddleware = (logger: any): RequestHandler => {
    return (req: LoggedRequest, res: Response, next: NextFunction) => {
        req.log = logger.child({ req_id: uuid.v4() }, true);
        req.log.info({ req });
        res.on("finish", () => req.log.info({ res }));
        next();
    }
};
