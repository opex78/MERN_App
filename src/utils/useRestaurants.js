import React from 'react'
import { mock_restaurants, RES_API_URL } from './constants';

async function useRestaurants() {
    const data = await fetch(RES_API_URL);
    let json = await data?.json()
    json = null;
    let resData = json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants ? json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
        : json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants ? json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
            : json?.data?.cards[3].card?.card?.gridElements?.infoWithStyle?.restaurants ? json?.data?.cards[3].card?.card?.gridElements?.infoWithStyle?.restaurants
                : json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants ? json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
                    : mock_restaurants
    console.log("resdata from hook", resData)
    //resData = [];
    return resData;

}

export default useRestaurants