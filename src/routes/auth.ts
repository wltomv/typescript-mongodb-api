import { Router, Request, Response } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";


const router = Router();

router.post('/register', registerCtrl);
router.get('/login', loginCtrl);





export { router };