import React, { createContext } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from '../components/Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

export const MenuContext = createContext();
function RestaurantMenu({ dataForB }) {
    console.log(dataForB)
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
                        <>

                            <MenuContext.Provider value={{
                                newVal: "123"
                            }}>
                                <RestaurantCategory data={category} dataForNewB={dataForB} />
                            </MenuContext.Provider>
                        </>
                    ))}
                </ul>
            </h3>
        </div>
    )
}



export default RestaurantMenu