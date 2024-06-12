import React from 'react'


const TopMix = ({image,name,desc}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-lime-950'>
        <img className='rounded' src={image} alt=''/>
        <h3 className='font-bold mt-2 mb-1'>{name}</h3>
        <p className='text-gray-400 mt-2 mb-1 text-[12px]'>{desc}</p>
    </div>
  )
}

export default TopMix