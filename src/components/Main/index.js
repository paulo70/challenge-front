import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { A } from 'hookrouter'

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

            const result = await response.json();


            if (result.name === "Luke Skywalker") {
                setMaster(result.name.replace(/\s+/g, ""))
            } else if (result.name === "Darth Vader") {
                setMaster(result.name.replace(/\s+/g, ""))
            }


        } catch (error) {
            console.log('ERROR')
        }
    }

    useEffect(() => {
        handleSortMaster()
    }, [])


    return (
        <div className="wrapper-main">
            <h1 className="wrapper-main--title">Welcome to <span>iClinic</span></h1>
            <h2 className="wrapper-main--subtitle">frontend challenge</h2>
            <A href={`/master/${master}`} onClick={() => handleSortMaster} className="wrapper-main--link">start</A>
        </div >
    )
}

export default Main