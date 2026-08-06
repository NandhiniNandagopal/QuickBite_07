import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Orders from "./pages/Orders";

import CartProvider from "./context/CartContext";

function App() {
    return (
        <BrowserRouter>

            <CartProvider>

                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/about" element={<About />} />
                </Routes>

                <Footer />

            </CartProvider>

        </BrowserRouter>
    );
}

export default App;