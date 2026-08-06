import axios from "axios";

const BASE_URL = "https://6a748e5c15e0453fe1b50666.mockapi.io/orders";

// GET - Fetch all orders
export const getOrders = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

// POST - Create a new order
export const createOrder = async (order) => {
    const response = await axios.post(BASE_URL, order);
    return response.data;
};

// PUT - Update an order
export const updateOrder = async (id, order) => {
    const response = await axios.put(`${BASE_URL}/${id}`, order);
    return response.data;
};

// DELETE - Delete an order
export const deleteOrder = async (id) => {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
};