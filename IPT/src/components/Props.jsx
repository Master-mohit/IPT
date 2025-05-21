import React from 'react'

const Props = (props) => {
    console.log(props.user);
  return (
    <div className='text-7xl font-bold w-full flex justify-center items-center h-screen bg-zinc-800 text-white'>
      <h1>This is {props.user}</h1>
    </div>
  )
}

export default Props