import React, { useEffect, useState } from 'react'
import { mock_res_menu } from '../utils/constants';
import Shimmer from './Shimmer';

function RestaurantMenu() {
    const [resMenu, setResMenu] = useState([])
    useEffect(() => {
        fetchResMenu();
    }, []);
    const fetchResMenu = async () => {
        const menuResAPI = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0044745&lng=72.55311549999999&restaurantId=43105&catalog_qa=undefined&submitAction=ENTER");
        const jsonMenu = await menuResAPI.json();
        console.log("jsonMenu", jsonMenu)
        const cards = jsonMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
        console.log("cards", cards)
        if (cards) {
            setResMenu(cards)
        }
        else {
            setResMenu(mock_res_menu)
        }
    }
    if (resMenu.length == 0) {
        return <Shimmer />
    }
    return (
        <div>
            <h3>
                <ul>
                    {resMenu.map((menu) => (
                        <li key={menu.card.info.id}>
                            {menu?.card?.info?.name}
                        </li>
                    ))}
                </ul>
            </h3>
        </div>
    )
}



export default RestaurantMenu