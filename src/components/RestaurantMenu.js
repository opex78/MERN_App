import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from '../components/Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

function RestaurantMenu() {
    const { resId } = useParams()
    console.log("resId", resId)
    const categories = useRestaurantMenu(resId)
    console.log("categories", categories)
    if (categories.length == 0) {
        return <Shimmer />
    }
    return (
        <div>
            <h3>
                <ul>
                    {categories.map((category) => (
                        <RestaurantCategory data={category} />
                    ))}
                </ul>
            </h3>
        </div>
    )
}



export default RestaurantMenu