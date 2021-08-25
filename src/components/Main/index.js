import React from 'react'
import { A } from 'hookrouter'

import './main.scss'

const Main = () => {
    return (
        <div className="wrapper-main">
            <h1 className="wrapper-main--title">Welcome to <span>iClinic</span></h1>
            <h2 className="wrapper-main--subtitle">frontend challenge</h2>
            <A href="/master" className="wrapper-main--link">start</A>
        </div>
    )
}

export default Main