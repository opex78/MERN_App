import React from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList'

function Cart() {
    const cartItems = useSelector((store) => store.cart.items)
    console.log("cartItems", cartItems)
    return (
        <div className='text-center m-4 p-4'>
            <div className='text-2xl font-bold'>Cart</div>
            <ItemList items={cartItems} />
        </div>
    )
}

export default Cart