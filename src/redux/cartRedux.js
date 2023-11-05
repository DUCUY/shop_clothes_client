import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,

    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setTotal: (state, action) => {
            state.total = action.payload
        },

        setQuantity: (state, action) => {
            state.quantity = action.payload
        },
        addProduct: (state, action) => {
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
            let newArr = state.products.filter((product) => {
                if (((product.size.toString() !== action.payload.size.toString()) || product._id.toString() !== action.payload._id.toString()) || (product.color.toString() !== action.payload.color.toString())) {
                    return product
                }
            })
            let totalPrice = newArr.reduce((totalPrice, product) => totalPrice + product.price * product.quantity, 0)
                state.products = newArr
                state.total = totalPrice
                state.quantity = newArr.length


        },
        plusProduct: (state, action) => {
            let totalPrice = 0
            const newArr = state.products.map((product) => {
                if (product._id === action.payload._id && product.size === action.payload.size && product.color === action.payload.color) {

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
                if (product._id === action.payload._id && product.size === action.payload.size && product.color === action.payload.color) {
                    if (product.quantity - 1 > 0) {
                        totalPrice += product.price * (product.quantity - 1)
                        return { ...product, quantity: product.quantity - 1 }
                    }
                }
                totalPrice += product.price * product.quantity
                return product
            })
            state.products = newArr
            state.total = totalPrice

        },
        updateCart: (state, action) => {
            state.products = action.payload.products;
            state.total = action.payload.total;
            state.quantity = action.payload.quantity;
        },
    },
});

export const { addProduct, removeProduct, plusProduct, minusProduct, setProducts, setQuantity, setTotal, updateCart } = cartSlice.actions;
export default cartSlice.reducer;