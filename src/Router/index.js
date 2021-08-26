import React from 'react'
import { useRoutes } from 'hookrouter'

import Main from '../components/Main'
import Master from '../components/Masters'


const routes = {
    '/': () => <Main />,
    '/master/:type': ({ type }) => <Master param={type} />
}

function Route() {
    return useRoutes(routes)
}

export default Route