import React ,{useState, useRef, useEffect}from 'react'
import PlayerControls from './playerControls'
import PlayerDetails from './playerDetails'

const Player = (props) => {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    useEffect(()=>{
        if(isPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
        }
    })

    const SkipSong = (forwards = true) => {
        if(forwards){
            props.setCurrentSongIndex(()=>{
                let temp = props.currentSongIndex;
                temp++;

                if(temp > props.songs.length - 1){
                    temp = 0;
                }
            return temp;
            })
        }else {
            props.setCurrentSongIndex(()=>{
                let temp = props.currentSongIndex;
                temp--;

                if(temp < 0){
                    temp = props.songs.length -1;
                }
            return temp;
            })
        }   
    }

  return (
    <div className='music__container col-md-10'>
        <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
        <h4>Music Q ~</h4>
        <PlayerDetails song={props.songs[props.currentSongIndex]}/>
        <PlayerControls 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        SkipSong={SkipSong}/>
        <p><strong>Next up: </strong> {props.songs[props.nextSongIndex].title} by {props.songs.artist}</p>
    </div>
  )
}

export default Player