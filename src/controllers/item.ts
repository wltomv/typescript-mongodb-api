import { Request, response, Response } from "express"
import { insertProduct, getProducts, getProduct, updateProduct, deleteProduct } from "../services/item"
import { handleHttp } from "../utils/error.handle"

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getProduct(id);
        const data = response ? response : "NOT FOUND"
        res.send(data);
    } catch (e) {
        handleHttp(res, 'ERROR GET ITEM')
    }
}
const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getProducts();
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR GET ITEMS')
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try {

        const responseItem = await insertProduct(body)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, 'ERROR POST ITEMS', e)
    }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseItem = await updateProduct(id, body)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, 'ERROR UPDATE ITEMS')
    }
}

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteProduct(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR DELETE ITEMS')
    }
}

export { getItem, getItems, postItem, updateItem, deleteItem }