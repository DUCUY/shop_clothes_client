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
        addProduct: (state, action) => {
            // const check = state.products.find((product) => product.id === action.payload.id);
            // if( )
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            const update = state.products.map((product) => product.id !== action.payload.id);
            if (index !== -1) {
                state.quantity -= state.products[index].quantity;
                state.total -= state.products[index].price * state.products[index].quantity;

                state.products.splice(index, 1);
            }
        },
    },
});

export const { addProduct,  removeProduct } = cartSlice.actions;
export default cartSlice.reducer;