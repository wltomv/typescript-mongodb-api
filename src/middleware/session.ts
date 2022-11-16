import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";



const checkJWT = (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || null;
        const jwt = jwtByUser?.split(" ").pop();

        const isUser = verifyToken(`${jwt}`);
        if (!isUser) {
            res.status(401);
            res.send('JWT INVALID')
        } else {
            next();
        }

    } catch (e) {
        console.log(e);
        res.status(400);
        res.send("INVALID SESSION")
    }
}

export { checkJWT }