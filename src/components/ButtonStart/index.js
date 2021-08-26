import React from 'react'
import { A } from 'hookrouter'

import './start.scss'

const ButtonStart = ({ url, handleFn }) => {
    return (
        <div className="wrapper-url">
            <A href={`/master/${url}`} onClick={() => handleFn} className="wrapper-url--link">start</A>
        </div>
    )
}

export default ButtonStart