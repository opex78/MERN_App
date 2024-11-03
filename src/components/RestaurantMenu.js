import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { mock_res_menu, RES_MENU_API } from '../utils/constants';
import Shimmer from '../components/Shimmer';

function RestaurantMenu() {
    const { resId } = useParams()
    console.log("resId", resId)
    const [resMenu, setResMenu] = useState([])
    useEffect(() => {
        fetchResMenu();
    }, []);
    const fetchResMenu = async () => {
        const menuResAPI = await fetch(RES_MENU_API + resId);
        const jsonMenu = await menuResAPI.json();
        console.log("jsonMenu", jsonMenu);

        const cards = jsonMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
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
                        menu.card.card.title && <li key={menu.card.card.title}>
                            {menu.card.card.title} {menu.card?.card?.itemCards?.length}
                            {menu.card.card.itemCards && menu.card.card.itemCards.map((item) => {
                                return <li>{item.card.info.name} - Rs. {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</li>
                            })}
                        </li>
                    ))}
                </ul>
            </h3>
        </div>
    )
}



export default RestaurantMenu