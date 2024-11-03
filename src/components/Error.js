import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err = useRouteError()
    console.log(err)
    return (
        <div>
            <p>
                {err.status} - {err.statusText}
            </p>
        </div>
    )
}

export default Error