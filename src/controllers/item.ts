import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR GET ITEM')
    }
}
const getItems = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR GET ITEMS')
    }
}

const postItem = ({ body }: Request, res: Response) => {
    try {
        res.send(body)
    } catch (e) {
        handleHttp(res, 'ERROR POST ITEMS')
    }
}

const updateItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR UPDATE ITEMS')
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR DELETE ITEMS')
    }
}

export { getItem, getItems, postItem, updateItem, deleteItem }