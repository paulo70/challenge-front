import React from 'react'

import DarthVader from '../../assets/images/darth-vader.png'
import LukeSkyWalker from '../../assets/images/luke-skywalker.png'

import './characters.scss'

const Characters = ({ character }) => {
    return (
        <div className="wrapper-image">
            <img src={character !== 'LukeSkywalker' ? DarthVader : LukeSkyWalker} />
        </div>
    )
}

export default Characters