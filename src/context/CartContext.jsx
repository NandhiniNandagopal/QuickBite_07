import React, { createContext, useReducer } from "react";
import CartReducer from "../reducers/CartReducer";

export const CartContext = createContext();

const initialState = [];

function CartProvider({ children }) {

    const [cart, dispatch] = useReducer(
        CartReducer,
        initialState
    );


    const addToCart = (food) => {
        dispatch({
            type: "ADD_ITEM",
            payload: food,
        });
    };


    const increaseQuantity = (id) => {
        dispatch({
            type: "INCREASE",
            payload: id,
        });
    };


    const decreaseQuantity = (id) => {
        dispatch({
            type: "DECREASE",
            payload: id,
        });
    };


    const removeItem = (id) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };


    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
        });
    };


    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeItem,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;