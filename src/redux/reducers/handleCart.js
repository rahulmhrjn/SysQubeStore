const cart = [];

const handleCart = (state = cart, action) => {
    // const product = action.payload; // Extract payload at the start

    switch (action.type) {
        case "ADDITEM":
            // Check if the product already exists in the cart
            const exist = state.find(item => item.id === action.payload.id);
            if (exist) {
                // If it exists, increase the quantity
                return state.map (item =>
                    item.id === action.payload.id ? {...item, qty:item.qty + 1 } : item
                );
            } else {
                // If it doesn't exist, add the product with quantity 1
                return [
                    ...state,
                    { ...action.payload, qty: 1},
                ];
            }

        case "DELETEITEM":
            const exist1 = state.find(item => item.id === action.payload.id);
            if (exist1.qty === 1) {
                // If quantity is 1, remove the product from the cart
                return state.filter(item => item.id !== action.payload.id);
            } else {
                // If quantity is more than 1, decrease the quantity
                return state.map(item =>
                    item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
                );
            }

        default:
            return state;
    }

}

export default handleCart;