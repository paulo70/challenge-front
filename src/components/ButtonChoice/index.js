import React from 'react'

import './button.scss'

const Button = ({ person, handlefn, value }) => {
    return (
        <div className='wrapper-button'>
            <button disabled={value} className={person !== 'LukeSkywalker' ? 'bgWhite' : 'bgBlack'} onClick={handlefn}>choose your path again, Padawan</button>
        </div >
    )
}

export default Button