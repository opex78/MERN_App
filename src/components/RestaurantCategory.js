import React, { useState } from 'react'
import ItemList from './ItemList';

function RestaurantCategory({ data }) {
    console.log(data);
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
        </div>
    )
}

export default RestaurantCategory