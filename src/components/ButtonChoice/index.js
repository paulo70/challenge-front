import React from 'react'

import './button.scss'

const Button = ({ person }) => {
    return (
        <div className="wrapper-button">
            <button className={person !== 'LukeSkywalker' ? 'bgWhite' : 'bgBlack'}>choose your path again, Padawan</button>
        </div >
    )
}

export default Button