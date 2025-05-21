
import React, { useState } from 'react'
import axios from 'axios'




const Axios = () => {
    const [data, setData] = useState([])
    const getdata = async() => {
        const response = await axios.get('https://fakestoreapi.com/products')
        setData(response.data)
        console.log(response);
    }

  return (
    <div className='h-auto bg-zinc-600 text-2xl p-10  text-white w-full overflow-hidden '>
        <button onClick={getdata} className='text-2xl font-semibold p-4'>GetDAta</button>
        <h1 className='text-white'>List of Items</h1>
       <div className='flex gap-24 items-center overflow-hidden scroll-x-auto'>
          {data.map((e)=> {
            return <div>
                 <img className='mt-3 w-32 h-32' src={e.image} alt='' />
          <h1>{e.category}</h1>
          <h2>{e.price}</h2>
            </div>
          })}
        
       </div>
    </div>
  )
}

export default Axios