import React from 'react'
import { RES_IMG_URL } from '../utils/constants'

function RestaurantCard({ name, cuisines, ratings, deliveryTime, cloudinaryId }) {
    return (
        <div className='w-[250px] h-[310px] m-2 p-2 border-2 border-solid bg-gray-100'>
            <img className='w-60 h-36' src={`${RES_IMG_URL}${cloudinaryId}`} alt="res-img" />
            <h3 className='font-bold text-lg'>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{ratings}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard