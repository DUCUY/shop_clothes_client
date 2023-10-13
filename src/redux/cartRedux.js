import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    // reducers: {
    //     addProduct: (state, action) => {
    //         state.quantity += 1;
    //         state.products.push(action.payload);
    //         state.total += action.payload.price * action.payload.quantity;
    //     },
    //     removeProduct: (state, action) => {
    //         const index = state.products.findIndex(product => product.id === action.payload.id);
    //         const update = state.products.map((product) => product.id !== action.payload.id);
    //         if (index !== -1) {
    //             state.quantity -= state.products[index].quantity;
    //             state.total -= state.products[index].price * state.products[index].quantity;

    //             state.products.splice(index, 1);
    //         }
    //     },
    // },
    reducers: {
        addProduct : (state, action) => {
            const check = state.products.find((product) => product._id === action.payload._id &&
                product.size === action.payload.size &&
                product.color === action.payload.color)
        
            if (check) {
                let totalPrice = 0
        
                const newArr = state.products.map((product) => {
                    if (product._id === action.payload._id) {
                        totalPrice += product.price * (check.quantity + action.payload.quantity)
                        return { ...product, quantity: check.quantity + action.payload.quantity }
                    }
                    totalPrice += product.price * product.quantity
                    return product
                })
                state.products = newArr
                state.total = totalPrice
        
            } else {
                state.products.push(action.payload)
                state.quantity += 1;
                state.total += action.payload.price * action.payload.quantity;
            }
        },
        removeProduct: (state, action) => {
                let totalPrice = 0
                let newArr = []
                for (let i = 0; i < state.products.length; i++) {
                    if( state.products[i]._id !== action.payload ){
                        totalPrice += state.products[i].price * state.products[i].quantity
                        newArr.push(state.products[i])
                    }
                }
                state.quantity -= 1
                state.products = newArr
                state.total = totalPrice
            
        },
        plusProduct: (state, action) => {
            let totalPrice = 0
            const newArr = state.products.map((product) => {
                if (product._id === action.payload) {

                    totalPrice += product.price * (product.quantity + 1)
                    return { ...product, quantity: product.quantity + 1 }
                }
                totalPrice += product.price * product.quantity
                return product
            })
            state.products = newArr
            state.total = totalPrice

        },
        minusProduct: (state, action) => {
            let totalPrice = 0
            const newArr = state.products.map((product) => {
                if (product._id === action.payload) {
                    if( product.quantity - 1 > 0 ) {                  
                    totalPrice += product.price * (product.quantity - 1)
                    return { ...product, quantity: product.quantity - 1 }
                    }
                }
                totalPrice += product.price * product.quantity
                return product
            })
            state.products = newArr
            console.log(newArr);
            state.total = totalPrice

        },

    },
});

export const { addProduct,  removeProduct, plusProduct, minusProduct } = cartSlice.actions;
export default cartSlice.reducer;