import React from 'react'
import Back from '../GoBack'

import './master.scss'
import DarthVader from '../../assets/images/darth-vader.png'

const Master = () => {
    return (
        <div className="wrapper-color black">
            <div className="wrapper-color--container">
                <Back />
                <div className="wrapper-color--container-master">
                    <button className="wrapper-color--container-master-button">choose your path again, Padawan</button>
                    <div className="wrapper-color--container-master-image">
                        <img src={DarthVader} />
                    </div>
                    <div className="wrapper-color--container-master-name">
                        <h3>Your master is <span>Darth Vader</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Master