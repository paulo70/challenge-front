import React from 'react'
import Back from '../GoBack'
import Image from '../Characters'
import Name from '../MasterName'
import Button from '../ButtonChoice'

import './master.scss'

const Master = ({ param }) => {

    console.log(param, 'aeaea')

    return (
        <div className={`wrapper-color ${param === 'LukeSkywalker' ? 'yellow' : 'black'}`}>
            <div className="wrapper-color--container">
                <Back color={param} />
                <div className="wrapper-color--container-master">
                    <Button person={param} />
                    <Image character={param} />
                    <Name master={param} />
                </div>
            </div>
        </div >
    )
}

export default Master