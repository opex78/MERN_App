import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { mock_restaurants, RES_API_URL } from '../utils/constants'
import useRestaurants from '../utils/useRestaurants'

import RestaurantCard from '../components/RestaurantCard'
import Shimmer from '../components/Shimmer'
import withPromotedLabel from '../components/withPromotedLabel'
import useRestaurantMenu from '../utils/useRestaurantMenu'


const Body = () => {
    console.log("body called")
    useEffect(() => {
        console.log("useEffect called")
        fetchData()
    }, [])
    // normal js variable
    // let filteredList = mock_restaurants;
    // let restaurants = [];
    // setRestaurants([12,3,4422]) // restaurants = [12,3,4422] /....
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

    // HOC => accepts RestaurantCard as input and returns enhanced RestaurantCard
    const EnhancedRestaurntCard = withPromotedLabel(RestaurantCard)
    return (restaurants.length === 0) ? <Shimmer /> :
        (
            <div>
                <div className='flex'>
                    <div className='m-3'>
                        <input
                            data-testid="searchInput"
                            className='border-2 border-solid border-black'
                            type="text" onChange={(e) => {
                                searchText = e.target.value
                                console.log("searchText", searchText)
                            }} />
                        <button
                            data-testid="searchButton"
                            className='mx-2 px-2 border border-solid border-black rounded-lg bg-amber-400' onClick={() => {
                                const filteredList = searchText ? restaurants?.filter((restaurnt) => {
                                    return restaurnt?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
                                }) : restaurants
                                setFilteredRestaurants(filteredList)
                            }}>Search</button>

                    </div>
                    <div>
                        <button className='m-2 p-1 border border-solid border-black rounded-lg bg-amber-400' onClick={() => {
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
                <div id="res-id" className='flex flex-wrap'>
                    {
                        filteredRestaurants && filteredRestaurants.map((restaurant, index) => {
                            return (
                                <div data-testid="resCard" key={index}>
                                    <Link to={"/restaurantmenu/" + restaurant.info.id}>
                                        <EnhancedRestaurntCard
                                            promoted={restaurant.info.promoted}
                                            name={restaurant.info.name}
                                            cuisines={restaurant.info.cuisines?.join(" , ")}
                                            deliveryTime={restaurant.info.sla.slaString}
                                            ratings={`${restaurant.info.avgRatingString} ⭐`}
                                            cloudinaryId={restaurant.info.cloudinaryImageId} />
                                    </Link>
                                </div>)
                        })
                    }
                </div>
            </div >
        )
}

export default Body