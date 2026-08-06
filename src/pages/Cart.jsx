import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

function Cart() {
    const { cart, increaseQuantity, decreaseQuantity, removeItem } = useContext(CartContext);

    return (
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
            <h1 className="mb-6 text-center text-4xl font-extrabold text-slate-900">Your Cart</h1>

            {cart.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-orange-200 bg-white p-10 text-center text-slate-600">
                    <h2 className="text-2xl font-semibold">Your cart is empty.</h2>
                    <p className="mt-2">Add a few delicious items from the menu to see them here.</p>
                </div>
            ) : (
                <div className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onIncrease={increaseQuantity}
                                onDecrease={decreaseQuantity}
                                onRemove={removeItem}
                            />
                        ))}
                    </div>

                    <div className="lg:pt-2">
                        <OrderSummary cart={cart} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;