import React from 'react'
import { A } from 'hookrouter'

import './back.scss'

const goBack = () => {
    return (
        <A href="/" className="goBack"><i className="goBack--arrow"></i>back</A>
    )
}

export default goBack