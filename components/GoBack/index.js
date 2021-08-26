import React from 'react'
import { A } from 'hookrouter'

import './back.scss'

const goBack = ({ color }) => {
    return (
        <A href="/" className={`goBack ${color !== 'LukeSkywalker' ? 'white' : 'black'}`}>
            <i className={`goBack--arrow`}></i> back
        </A>
    )
}

export default goBack