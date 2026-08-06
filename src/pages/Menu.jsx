import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import { CartContext } from "../context/CartContext";
import FoodList from "../components/FoodList";
import { getMeals } from "../services/mealApi";

function Menu() {

    const { addToCart } = useContext(CartContext);

    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [loading, setLoading] = useState(true);


    // Fetch meals from TheMealDB API
    useEffect(() => {

        getMeals()
            .then((meals) => {

                const formattedMeals = meals.map((meal) => ({
                    id: meal.idMeal,
                    name: meal.strMeal,
                    image: meal.strMealThumb,
                    category: meal.strCategory || "Other",
                    price: Math.floor(Math.random() * 300) + 100
                }));

                setFoods(formattedMeals);
                setLoading(false);

            })
            .catch((error) => {

                console.log("API Error:", error);
                setLoading(false);

            });

    }, []);


    // Search and category filtering
    const filteredFoods = foods.filter((food) => {

        const matchesSearch = food.name
            .toLowerCase()
            .includes(search.toLowerCase());


        const matchesCategory =
            selectedCategory === "All" ||
            food.category === selectedCategory;


        return matchesSearch && matchesCategory;

    });


    if (loading) {

        return (
            <h2 className="text-center text-2xl mt-10">
                Loading Menu...
            </h2>
        );

    }


    return (

        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">

            <div className="mb-8 text-center">

                <h1 className="text-4xl font-extrabold text-slate-900">
                    Our Menu
                </h1>

                <p className="mt-2 text-slate-600">
                    Discover your next favorite order from our curated selection.
                </p>

            </div>


            <SearchBar
                search={search}
                setSearch={setSearch}
            />


            <CategoryFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />


            <FoodList
                foods={filteredFoods}
                addToCart={addToCart}
            />

        </div>

    );
}

export default Menu;