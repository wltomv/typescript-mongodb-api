import { Router, Request, Response } from "express";

const router = Router();


/**
 * http://localhost:3002/items [GET]
 */
router.get('/', (req: Request, res: Response) => {
    res.send({ data: "DATA" })
})

export { router };