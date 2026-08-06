import React, { useEffect, useState } from "react";
import { getOrders, deleteOrder, updateOrder } from "../services/orderApi";

function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const data = await getOrders();
            setOrders(data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    // Update Order Status
    const handleStatusUpdate = async (order) => {

        const newStatus =
            order.status === "Pending"
                ? "Delivered"
                : "Pending";

        try {

            await updateOrder(order.id, {
                ...order,
                status: newStatus
            });

            fetchOrders();

        } catch (error) {
            console.error("Error updating order:", error);
        }

    };

    // Delete Order
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this order?"
        );

        if (!confirmDelete) return;

        try {

            await deleteOrder(id);
            fetchOrders();

        } catch (error) {

            console.error("Error deleting order:", error);

        }

    };

    return (
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">

            <h1 className="mb-8 text-center text-4xl font-extrabold text-slate-900">
                My Orders
            </h1>

            {orders.length === 0 ? (

                <h2 className="text-center text-xl text-gray-500">
                    No Orders Found
                </h2>

            ) : (

                <div className="grid gap-6">

                    {orders.map((order) => (

                        <div
                            key={order.id}
                            className="rounded-2xl border border-orange-200 bg-white p-6 shadow"
                        >

                            <h2 className="text-2xl font-bold text-orange-600">
                                {order.customerName}
                            </h2>

                            <p className="mt-2">
                                <strong>Food:</strong> {order.foodName}
                            </p>

                            <p>
                                <strong>Quantity:</strong> {order.quantity}
                            </p>

                            <p>
                                <strong>Total Price:</strong> ₹{order.totalPrice}
                            </p>

                            <p>
                                <strong>Address:</strong> {order.address}
                            </p>

                            <p>
                                <strong>Phone:</strong> {order.phone}
                            </p>

                            <p>
                                <strong>Status:</strong>{" "}
                                <span
                                    className={
                                        order.status === "Pending"
                                            ? "text-yellow-600 font-semibold"
                                            : "text-green-600 font-semibold"
                                    }
                                >
                                    {order.status}
                                </span>
                            </p>

                            <div className="mt-4 flex gap-3">

                                <button
                                    onClick={() => handleStatusUpdate(order)}
                                    className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                                >
                                    {order.status === "Pending"
                                        ? "Mark as Delivered"
                                        : "Mark as Pending"}
                                </button>

                                <button
                                    onClick={() => handleDelete(order.id)}
                                    className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                                >
                                    Delete Order
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default Orders;