import React, { useCallback, useContext } from 'react'
import Navbar from './Navbar'
import { artistData,topData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import FavouriteArtist from './FavouriteArtist'
import TopMix from './TopMix'
import { PlayerContext } from '../context/PlayerContext'

const DisplayHome = () => {

  const {songsData, albumsData} = useContext(PlayerContext);
  return (
    <>
    <Navbar/>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image}/>))}
        </div>
        
    </div>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
        {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image}/>))}
        </div>
        
    </div>

    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Your favourite artists</h1>
        <div className='flex overflow-auto'>
        {artistData.map((item,index)=>(<FavouriteArtist key={index} image={item.image} name={item.name}/>))}
        </div>
        
    </div>

    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Your top mixes</h1>
        <div className='flex overflow-auto'>
        {topData.map((item,index)=>(<TopMix key={index} image={item.image} name={item.name} desc={item.desc}/>))}
        </div>
        
    </div>
    </>
  )
}

export default DisplayHome