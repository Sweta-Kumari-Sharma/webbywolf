import React from 'react'
import search from '../../Images/Vector.png'

const Body = ({text, setText, count, setCount, refresh, setRefresh}) => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center text-white text-[28px] md:text-[71px] font-[700]'>
            <div>Discover over 2,000,000 </div>
            <div>free Stock Images</div>
        </div>
        <div className='w-[55%] h-[68px] bg-[#D9D9D9] border-2 border-[#D9D9D9] rounded-lg  bg-opacity-25 items-center px-2 md:px-4  mt-4 flex justify-between  text-white mx-auto'>
            <img src={search} alt=''/>
            <input type='text' placeholder='Search images..' className='w-[75%] bg-transparent outline-none text-[18px] text-white' value={text} onChange={(e) => setText(e.target.value)}/>
            <input type='number' placeholder='Number of images' className='w-[5%] bg-transparent outline-none' value={count} onChange={(e) => setCount(e.target.value)}/>
            <div className='border border-white px-2 rounded-sm  cursor-pointer' onClick={()=>setRefresh(refresh+1)}>GO!</div>
        </div>
    </div>
  )
}

export default Body
