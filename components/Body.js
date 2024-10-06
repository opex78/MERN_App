import React, { useEffect, useState } from 'react'

import RestaurantCard from './RestaurantCard'

function Body() {
    useEffect(() => {
        console.log("component is re rendered")
        fetchData()
    }, [])
    // normal js variable
    // let filteredList = mock_restaurants;

    let [restaurants, setRestaurants] = useState([])
    // const resList = null

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0044745&lng=72.55311549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        const resData = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        setRestaurants(resData)
    }

    return (
        <div className='body'>
            <div className='filter'>
                <button onClick={() => {
                    let filteredList = restaurants.filter((restaurnt) => {
                        return restaurnt.info.avgRatingString >= 4.5
                    })
                    console.log("filteredList", filteredList)

                    //restaurants = filteredList
                    setRestaurants(filteredList)
                    console.log("after filter restaurnts", restaurants)
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div id="res-id" className='res-container'>
                {/* <RestaurantCard name="Baskins" cuisines="Ice Cream, Desserts" deliveryTime="15-20 minutes" ratings="4.3 ⭐" />
                <RestaurantCard name="Honest" cuisines="North Indian" deliveryTime="10-15 minutes" ratings="2.3 ⭐" />
                <RestaurantCard name="Sankalp" cuisines="North Indian" deliveryTime="5-15 minutes" ratings="4.7 ⭐" />
                 */}

                {
                    restaurants && restaurants.map((restaurant, index) => {
                        return <RestaurantCard
                            key={index}
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