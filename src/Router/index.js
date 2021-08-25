import React from 'react'
import { useRoutes } from 'hookrouter'

import Main from '../components/Main'
import Master from '../components/Masters'


const routes = {
    '/'  : () => <Main />,
    '/master' : () => <Master />
}

function Route(){
    return useRoutes(routes)
}

export default Route