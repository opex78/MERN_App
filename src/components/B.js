import React, { useContext } from 'react'
import { appContext } from '../App'

function B() {
    const { bData } = useContext(appContext)
    return (    
        <div>B Data Received is : {bData}</div>
    )
}

export default B