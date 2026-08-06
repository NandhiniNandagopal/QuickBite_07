import React from "react";

function CategoryFilter({ selectedCategory, setSelectedCategory }) {

    const categories = [
        "All",
        "Chicken",
        "Beef",
        "Seafood",
        "Dessert",
        "Pasta",
        "Vegetarian",
        "Breakfast",
        "Lamb",
        "Side",
        "Starter"
    ];


    return (
        <div className="mb-6">

            <h3 className="mb-3 text-lg font-bold text-slate-800">
                Categories
            </h3>

            <div className="flex flex-wrap gap-2">

                {categories.map((category) => (

                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                            selectedCategory === category
                                ? "bg-orange-500 text-white"
                                : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                        }`}
                    >
                        {category}
                    </button>

                ))}

            </div>

        </div>
    );
}

export default CategoryFilter;