import { useEffect, useState } from "react";
import { mock_res_categories, RES_MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState([])
    useEffect(() => {
        fetchResMenu();
    }, []);
    const fetchResMenu = async () => {
        const menuResAPI = await fetch(RES_MENU_API + resId);
        const jsonMenu = await menuResAPI?.json();
        if (jsonMenu) {
            console.log("jsonMenu", jsonMenu);
            const cards = jsonMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards

            // get the categories
            // 1. ItemCategory
            const category = cards.filter((menuItem) => menuItem.card.card?.["@type"].includes("ItemCategory"))
            console.log("category", category)
            setResMenu(category)
        }
        else {
            setResMenu(mock_res_categories)
        }

    }
    return resMenu;
}

export default useRestaurantMenu