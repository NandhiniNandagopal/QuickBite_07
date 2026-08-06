import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Fetch 10 meals from each category
export const getMeals = async () => {

    const categories = [
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

    const categorizedMeals = [];

    for (const category of categories) {

        const response = await axios.get(
            `${BASE_URL}/filter.php?c=${category}`
        );

        // Take only the first 10 meals
        const categoryMeals = (response.data.meals || []).slice(0, 10);

        categoryMeals.forEach((meal) => {
            categorizedMeals.push({
                ...meal,
                strCategory: category
            });
        });
    }

    return categorizedMeals;
};