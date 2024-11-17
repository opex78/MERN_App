import React from 'react'
import B from './B'

function A({ dataForCategoryB }) {
    return (
        <>

            <B dataForCategoryB={dataForCategoryB} />
        </>
    )
}

export default A