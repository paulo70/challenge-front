import React from 'react'

import './name.scss'

const MasterName = ({ master }) => {
    return (
        <div className={`wrapper-name ${master === 'LukeSkywalker' ? 'textBlack' : 'textWhite'}`}>
            <h3>Your master is <span>{master !== 'LukeSkywalker' ? 'Darth Vader' : 'Luke SkyWalker'}</span></h3>
        </div>
    )
}

export default MasterName