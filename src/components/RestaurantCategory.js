import React, { useContext, useState } from 'react'
import ItemList from './ItemList';
import { MenuContext } from './RestaurantMenu';


function RestaurantCategory({ data }) {
    const menuData = useContext(MenuContext)
    console.log("menuData is", menuData)
    const [itemShouldShow, setItemShouldShow] = useState(true);
    const handleClick = () => {
        setItemShouldShow(!itemShouldShow)
    }
    return (
        <div className='w-6/12 m-auto bg-gray-50 shadow-lg'>
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                <span className='font-bold text-lg'>{data.card.card.title} ({data?.card?.card?.itemCards?.length})</span>
                <span>{itemShouldShow ? "⬇️" : "⬆️"}</span>
            </div>
            {/* accordian body */}
            {itemShouldShow && <ItemList items={data.card.card.itemCards} />}
            <span>{menuData.newVal}</span>
        </div>
    )
}

export default RestaurantCategory