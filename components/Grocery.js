import React from 'react'

function Grocery(props) {
    const { businessName } = props
    return (
        <div>
            <h1>{businessName}</h1>
        </div>
    )
}

export default Grocery