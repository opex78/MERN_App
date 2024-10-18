import React, { useEffect, useState } from 'react'
import { mock_restaurants, RES_API_URL } from '../utils/constants'

import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'

function Body() {
    console.log("body component is rendered")

    useEffect(() => {
        console.log("body useEffect is called")
        fetchData()
    }, [])
    // normal js variable
    // let filteredList = mock_restaurants;

    let [restaurants, setRestaurants] = useState([])
    let [filteredRestaurants, setFilteredRestaurants] = useState([])
    let searchText;
    // 1st component render
    // let restaurants = []
    const fetchData = async () => {
        const data = await fetch(RES_API_URL);
        const json = await data.json()
        const resData = json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants ? json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
            : json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants ? json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
                : json?.data?.cards[3].card?.card?.gridElements?.infoWithStyle?.restaurants ? json?.data?.cards[3].card?.card?.gridElements?.infoWithStyle?.restaurants
                    : json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants ? json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
                        : mock_restaurants
        // this will rerender my component , 
        // internally it is executing => restaurants = resData (before executing again)
        setRestaurants(resData)
        setFilteredRestaurants(resData)
    };

    return (restaurants.length === 0) ? <Shimmer /> :
        (
            <div className='body'>
                <div className='filter'>
                    <div className='search-bar'>
                        <input type="text" onChange={(e) => {
                            searchText = e.target.value
                            console.log("searchText", searchText)
                        }} />
                        <button className='btnSearch' onClick={() => {
                            const filteredList = restaurants.filter((restaurnt) => {
                                return restaurnt.info.name.toLowerCase().includes(searchText.toLowerCase())
                            })
                            setFilteredRestaurants(filteredList)
                        }}>Search</button>

                    </div>
                    <div className='filter-top-rated'>
                        <button onClick={() => {
                            let filteredList = restaurants.filter((restaurnt) => {
                                return restaurnt.info.avgRatingString >= 4.5
                            })
                            console.log("filteredList", filteredList)

                            //restaurants = filteredList
                            setFilteredRestaurants(filteredList)
                            console.log("after filter restaurnts", restaurants)
                        }}>
                            Top Rated Restaurants
                        </button>
                    </div>

                </div>
                <div id="res-id" className='res-container'>
                    {/* <RestaurantCard name="Baskins" cuisines="Ice Cream, Desserts" deliveryTime="15-20 minutes" ratings="4.3 ⭐" />
                <RestaurantCard name="Honest" cuisines="North Indian" deliveryTime="10-15 minutes" ratings="2.3 ⭐" />
                <RestaurantCard name="Sankalp" cuisines="North Indian" deliveryTime="5-15 minutes" ratings="4.7 ⭐" />
                 */}

                    {
                        filteredRestaurants && filteredRestaurants.map((restaurant, index) => {
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