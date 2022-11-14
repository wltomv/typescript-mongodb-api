
import { Product } from "../interfaces/product.interface"
import ItemModel from "../models/items"

const insertProduct = async (item: Product) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert
}

const getProducts = async () => {
    const responseItem = await ItemModel.find({})
    return responseItem
}

const getProduct = async (id: string) => {
    const responseItem = await ItemModel.findOne({ _id: id })
    return responseItem
}

const updateProduct = async (id: string, data: Product) => {
    const responseItem = await ItemModel.findOneAndUpdate(
        { _id: id },
        data,
        {
            new: true
        }
    );
    return responseItem
}


const deleteProduct = async (id: string) => {
    const responseItem = await ItemModel.remove({ _id: id });
    return responseItem
}

export { insertProduct, getProducts, getProduct, updateProduct, deleteProduct }