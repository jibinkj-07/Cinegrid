/* eslint-disable react/prop-types */
import { useState } from "react";
import { CategoryContext } from "./categoryContext.js";
import { categories } from "../navigation/nav.helper.js";

export const CategoryProvider = ({ children }) => {
    const [activeCategory, setActiveCategory] = useState(categories[0].items[0]);

    const updateCategory = (category) => {
        setActiveCategory(category);
    };

    return (
        <CategoryContext.Provider value={{ activeCategory, updateCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};
