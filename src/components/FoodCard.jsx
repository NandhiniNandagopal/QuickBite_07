import React from 'react';

function FoodCard({ food, addToCart }) {
    return (
        <div className="flex h-full flex-col rounded-3xl border border-orange-100 bg-white p-4 shadow-sm shadow-orange-100 transition hover:-translate-y-1 hover:shadow-lg">
            <img
                src={food.image}
                alt={food.name}
                className="h-44 w-full rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-xl font-bold text-slate-800">{food.name}</h3>
            <p className="text-sm text-slate-500">Category: {food.category}</p>
            <p className="mt-2 font-semibold text-orange-700">Price: Rs.{food.price}</p>
            <button
                onClick={() => addToCart(food)}
                className="mt-4 rounded-full bg-orange-500 px-4 py-2 font-semibold text-white transition hover:bg-orange-600"
            >
                Add to Cart
            </button>
        </div>
    );
}

export default FoodCard;