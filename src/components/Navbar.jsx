import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    const navItems = [
        { to: "/", label: "Home" },
        { to: "/menu", label: "Menu" },
        { to: "/cart", label: "Cart" },
        { to: "/checkout", label: "Checkout" },
        { to: "/orders", label: "Orders" },
        { to: "/about", label: "About" },
    ];

    return (
        <nav className="border-b border-orange-100 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">

                <h2 className="text-2xl font-extrabold text-orange-700">
                    QuickBite
                </h2>

                <ul className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">

                    {navItems.map((item) => (

                        <li key={item.to}>

                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    `rounded-full px-3 py-2 transition ${
                                        isActive
                                            ? "bg-orange-500 text-white"
                                            : "hover:bg-orange-50"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>

                        </li>

                    ))}

                </ul>

            </div>
        </nav>
    );
}

export default Navbar;