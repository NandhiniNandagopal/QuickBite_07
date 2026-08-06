import React from "react";
import FoodCard from "./FoodCard";

function FoodList({ foods, addToCart }) {
    return (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {foods.length > 0 ? (
                foods.map((food) => (
                    <FoodCard key={food.id} food={food} addToCart={addToCart} />
                ))
            ) : (
                <h2 className="col-span-full text-center text-2xl font-semibold text-slate-500">No food items available.</h2>
            )}
        </div>
    );
}

export default FoodList;