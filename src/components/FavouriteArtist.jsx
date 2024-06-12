import React from 'react'


const FavouriteArtist = ({image,name}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer '>
        <img className='rounded' src={image} alt=''/>
        <p className='font-bold mt-2 mb-1'>{name}</p>
    </div>
  )
}

export default FavouriteArtist