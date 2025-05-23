import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
  return (
   <div className='w-full h-20 bg-emerald-950 px-8 py-4 font-white flex items-center justify-between'>
     <div className='font-bold text-3xl text-white'>
        <h1>Mohiii</h1>
    </div>
    <div className='text-white font-semibold text-[20px] flex justify-between items-center gap-6'>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Service</h1>
        <Link to="/props"><h1>Props</h1></Link>
        <Link to="/axios"><h1>Axios</h1></Link>
    </div>
   </div>
  )
}

export default Nav