
import { Request, response, Response } from 'express';
import { registerNewUser, login } from '../services/auth'

const registerCtrl = async ({ body }: Request, res: Response) => {
    const responseUser = await registerNewUser(body);
    res.send(responseUser)
};


const loginCtrl = async ({ body }: Request, res: Response) => {
    const { email, password } = body;
    const responseUser = await login({ email, password });

    if (responseUser === 'INCORRECT PASSWORD') {
        res.status(403);
        res.send(responseUser)
    }
    else {
        res.send(responseUser)
    }
};

export { loginCtrl, registerCtrl }