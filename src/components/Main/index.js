import React, { useState, useEffect } from 'react'
import { A } from 'hookrouter'
import Title from '../Titles'

import './main.scss'

const Main = () => {
    const getLight = 'https://swapi.dev/api/people/1'
    const getDark = 'https://swapi.dev/api/people/4'

    const [master, setMaster] = useState('')

    const handleSortMaster = async () => {
        try {

            const response = await Promise.race([
                fetch(getLight),
                fetch(getDark),
            ]);

            const outcome = await response.json();


            if (outcome.name === "Luke Skywalker") {
                setMaster(outcome.name.replace(/\s+/g, ""))
            } else if (outcome.name === "Darth Vader") {
                setMaster(outcome.name.replace(/\s+/g, ""))
            }


        } catch (error) {
            console.log('ERROR')
        }
    }

    useEffect(() => {
        handleSortMaster()
    }, [master])


    return (
        <div className="wrapper-main">
            <Title />
            <A href={`/master/${master}`} onClick={() => handleSortMaster} className="wrapper-main--link">start</A>
        </div >
    )
}

export default Main