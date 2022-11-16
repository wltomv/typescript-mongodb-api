import { Router, Request, Response } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { checkJWT } from '../middleware/session';

const router = Router();


/**
 * http://localhost:3002/items [GET]
 */
router.get('/', checkJWT, getItems);
router.get('/:id', getItem);
router.post('/', postItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);




export { router };