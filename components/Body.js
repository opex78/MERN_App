import React from 'react'
import { MOCK_API_RES, mock_restaurants } from '../utils/constants'
import RestaurantCard from './RestaurantCard'

function Body() {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {/* <RestaurantCard name="Baskins" cuisines="Ice Cream, Desserts" deliveryTime="15-20 minutes" ratings="4.3 ⭐" />
                <RestaurantCard name="Honest" cuisines="North Indian" deliveryTime="10-15 minutes" ratings="2.3 ⭐" />
                <RestaurantCard name="Sankalp" cuisines="North Indian" deliveryTime="5-15 minutes" ratings="4.7 ⭐" />
                 */}

                {
                    mock_restaurants.map((restaurant) => {
                        console.log("restaurant is", restaurant)
                        return <RestaurantCard
                            name={restaurant.info.name}
                            cuisines={restaurant.info.cuisines?.join(" , ")}
                            deliveryTime={restaurant.info.sla.slaString}
                            ratings={`${restaurant.info.avgRatingString} ⭐`}
                            cloudinaryId={restaurant.info.cloudinaryImageId} />
                    })
                }
            </div>
        </div>
    )
}

export default Body