import { Request, Response, NextFunction } from "express"

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('middleware')
    next()
}

export { logMiddleware }