import React from 'react'
import Back from '../GoBack'
import Image from '../Characters'
import Name from '../MasterName'

import './master.scss'

const Master = ({ param }) => {

    console.log(param, 'aeaea')

    return (
        <div className={`wrapper-color ${param === 'LukeSkywalker' ? 'yellow' : 'black'}`}>
            <div className="wrapper-color--container">
                <Back />
                <div className="wrapper-color--container-master">
                    <button className="wrapper-color--container-master-button">choose your path again, Padawan</button>
                    <Image character={param} />
                    <Name master={param} />
                </div>
            </div>
        </div >
    )
}

export default Master