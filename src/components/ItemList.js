import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'
import { RES_IMG_URL } from '../utils/constants'

function ItemList({ items }) {
    const dispatch = useDispatch()
    const handleAddItem = (item) => {
        console.log("item", item)
        // dispatch action
        dispatch(addItem(item))
    }
    return (
        <div>
            {
                //items = [1, 2, 3, 4, 5]
                // items.map((item) => {
                //     task
                // })
                // items?.map(() => {

                // })
                items?.map((item) => (
                    <div className='p-2 m-2 flex border-gray-200 border-b-2 justify-between '>
                        <div className='px-4 mx-4 w-6/12'>
                            <div className='py-2'>
                                <span>{item.card.info.name}</span>
                                <span>- ₹ {item.card.info.price / 100}</span>
                            </div>
                            {item.card.info.ratings.aggregatedRating.rating && <p>⭐ {item.card.info.ratings.aggregatedRating.rating}</p>}
                        </div>
                        <div>
                            <div className='absolute'>
                                <button className='p-2 bg-black text-white shadow-lg rounded-lg m-auto' onClick={() => handleAddItem(item)}>Add +</button>
                            </div>
                            <img src={RES_IMG_URL + item.card.info.imageId} className="w-28" />
                        </div>

                    </div>
                ))
                // items?.map(item => {
                //     console.log("hi")
                //     tempFun(item)
                // })
                //items?.map(tempFun)
            }
        </div>
    )
}

export default ItemList