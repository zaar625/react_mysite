import React from 'react'

const PlayerDetails = (props) => {
  return (
    <div className='music__details'>
        <div className='music__details__img'>
            <img src={props.song.img_src} alt=''/>
        </div>
        <h3 className='music__details__title'>{props.song.title}</h3>
        <h4 className='music__details__artist'>{props.song.artist}</h4>
    </div>
  )
}

export default PlayerDetails