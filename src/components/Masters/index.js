import React, { useState, useEffect } from 'react'
import Back from '../GoBack'
import Image from '../Characters'
import Name from '../MasterName'
import Button from '../ButtonChoice'
import Loading from '../Loading'

import './master.scss'

const Master = ({ param }) => {
    const getLight = 'https://swapi.dev/api/people/1'
    const getDark = 'https://swapi.dev/api/people/4'

    const [URL, setURL] = useState(param)
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)

    console.log(param, 'aeaea')
    console.log('ulr', URL)



    const handleSortMasterURL = async () => {
        try {

            setLoading(true)
            setDisabled(true)

            const response = await Promise.race([
                fetch(getLight),
                fetch(getDark),
            ]);

            const outcome = await response.json();


            if (outcome.name === "Luke Skywalker") {
                setURL(outcome.name.replace(/\s+/g, ""))
            } else if (outcome.name === "Darth Vader") {
                setURL(outcome.name.replace(/\s+/g, ""))
            }

            setLoading(false)
            setDisabled(false)


        } catch (error) {
            console.log('ERROR')
        }
    }

    return (
        <div className={`wrapper-color ${URL === 'LukeSkywalker' ? 'yellow' : 'black'}`}>
            {loading && (
                <Loading />
            )}
            <div className="wrapper-color--container">
                <Back color={URL} />
                <div className="wrapper-color--container-master">
                    <Button person={URL} handlefn={() => handleSortMasterURL()} value={disabled} />
                    <Image character={URL} />
                    <Name master={URL} />
                </div>
            </div>
        </div >
    )
}

export default Master