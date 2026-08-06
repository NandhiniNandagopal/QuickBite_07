import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import OrderSummary from "../components/OrderSummary";
import { createOrder } from "../services/orderApi";

function Checkout() {

    const { cart, clearCart } = useContext(CartContext);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const placeOrder = async () => {

        if (!name || !address || !phone) {
            alert("Please fill in all the fields.");
            return;
        }

        const totalPrice = cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );

        const totalQuantity = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

        const foodNames = cart
            .map((item) => item.name)
            .join(", ");

        const order = {
            customerName: name,
            address: address,
            phone: phone,
            foodName: foodNames,
            quantity: totalQuantity,
            totalPrice: totalPrice,
            status: "Pending"
        };

        try {

            await createOrder(order);

            alert("Order placed successfully!");

            clearCart();

            setName("");
            setAddress("");
            setPhone("");

        } catch (error) {

            console.error(error);
            alert("Failed to place order.");

        }

    };

    return (

        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">

            <h1 className="mb-6 text-center text-4xl font-extrabold text-slate-900">
                Checkout
            </h1>

            {cart.length === 0 ? (

                <div className="rounded-3xl border border-dashed border-orange-200 bg-white p-10 text-center text-slate-600">

                    <h2 className="text-2xl font-semibold">
                        Your cart is empty.
                    </h2>

                    <p className="mt-2">
                        Please add items before placing an order.
                    </p>

                </div>

            ) : (

                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

                    <div className="rounded-3xl bg-white p-6 shadow-sm shadow-orange-100">

                        <h2 className="mb-4 text-2xl font-bold text-slate-800">
                            Delivery Details
                        </h2>

                        <div className="space-y-4">

                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-2xl border border-orange-200 px-4 py-3 outline-none transition focus:border-orange-500"
                            />

                            <textarea
                                placeholder="Enter your address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="min-h-32 w-full rounded-2xl border border-orange-200 px-4 py-3 outline-none transition focus:border-orange-500"
                            />

                            <input
                                type="text"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full rounded-2xl border border-orange-200 px-4 py-3 outline-none transition focus:border-orange-500"
                            />

                        </div>

                    </div>

                    <div className="space-y-4">

                        <OrderSummary cart={cart} />

                        <button
                            onClick={placeOrder}
                            className="w-full rounded-full bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600"
                        >
                            Place Order
                        </button>

                    </div>

                </div>

            )}

        </div>

    );
}

export default Checkout;