// for adding items to cart

export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

// for deleting items from cart

export const delItem = (product) => {
    return{
        type : "DELETEITEM",
        payload : product
    }
}