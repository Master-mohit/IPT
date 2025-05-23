import React from 'react'
import { Route, Routes } from 'react-router'
import Props from '../components/Props'
import Axios from '../components/Axios'

const Routerrss = () => {
  return (
    <div>
        <div>
       <Routes>
            <Route path="/props" element={<Props user="Doeremon" />} />
          <Route path='/axios' Component={Axios}/>
        </Routes>     
    </div>
    </div>
  )
}

export default Routerrss