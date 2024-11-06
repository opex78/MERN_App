import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { mock_restaurants, RES_API_URL } from '../utils/constants'
import useRestaurants from '../utils/useRestaurants'

import RestaurantCard from '../components/RestaurantCard'
import Shimmer from '../components/Shimmer'
import withPromotedLabel from '../components/withPromotedLabel'

function Body() {
    useEffect(() => {
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
        const resData = await useRestaurants();
        console.log("resData from body", resData)
        setRestaurants(resData)
        setFilteredRestaurants(resData)
    }

    function sum(a, b) {
        return a + b;
    }

    sum(20, 30)

    // HOC => accepts RestaurantCard as input and returns enhanced RestaurantCard
    const EnhancedRestaurntCard = withPromotedLabel(RestaurantCard)
    return (restaurants.length === 0) ? <Shimmer /> :
        (
            <div className='m-4 p-4'>
                <div className='filter'>
                    <div className='search-bar'>
                        <input type="text" onChange={(e) => {
                            searchText = e.target.value
                            console.log("searchText", searchText)
                        }} />
                        <button className='btnSearch' onClick={() => {
                            const filteredList = searchText ? restaurants?.filter((restaurnt) => {
                                return restaurnt?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
                            }) : restaurants
                            setFilteredRestaurants(filteredList)
                        }}>Search</button>

                    </div>
                    <div className='filter-top-rated'>
                        <button onClick={() => {
                            let filteredList = restaurants.filter((restaurnt) => {
                                return restaurnt.info.avgRatingString >= 4.5
                            })
                            setFilteredRestaurants(filteredList)
                            console.log("after filter restaurnts", restaurants)
                        }}>
                            Top Rated Restaurants
                        </button>
                    </div>

                </div>
                <div id="res-id" className='res-container'>
                    {
                        filteredRestaurants && filteredRestaurants.map((restaurant, index) => {
                            return (
                                <Link to={"/restaurantmenu/" + restaurant.info.id}>
                                    <EnhancedRestaurntCard
                                        key={index}
                                        promoted={restaurant.info.promoted}
                                        name={restaurant.info.name}
                                        cuisines={restaurant.info.cuisines?.join(" , ")}
                                        deliveryTime={restaurant.info.sla.slaString}
                                        ratings={`${restaurant.info.avgRatingString} ⭐`}
                                        cloudinaryId={restaurant.info.cloudinaryImageId} />
                                </Link>)
                        })
                    }
                </div>
            </div >
        )
}

export default Body