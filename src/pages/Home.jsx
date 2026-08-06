import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700">Fresh • Fast • Flavorful</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-orange-950 sm:text-5xl">Welcome to QuickBite</h1>
            <p className="max-w-2xl text-lg text-slate-600">
                Delicious food delivered to your doorstep! Explore our menu and order your favorite dishes with just a few clicks.
            </p>
            <img src="/logo.svg" alt="QuickBite" className="h-auto w-72 rounded-2xl shadow-lg shadow-orange-200" />
            <Link to="/menu">
                <button className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">Explore Menu</button>
            </Link>
        </div>
    );
}

export default Home;