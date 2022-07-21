import React ,{useState, useEffect}from 'react'
import Player from './components/Player';
import './app.scss'

const ProjectOne = () => {
    const [songs, setSongs] = useState([
      {
        title: "Head Above Water",
        artist: "Avril Lavigne",
        img_src: require('./images/avril.jpg'),
        src: require('./music/Avril_Lavigne.mp3')
      },
      {
        title: "Call Me Maybe",
        artist: "Carly Rae Jepsen",
        img_src: require('./images/Call-me-maybe.jpg'),
        src: require('./music/CallMeMaybe.mp3')
      },
      {
        title: "Hola Hola",
        artist: "Kard",
        img_src: require('./images/Hola.jpg'),
        src: require('./music/Kard_Hola.mp3')
      },
    ])

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    useEffect(()=>{
      setNextSongIndex(()=>{
        if(currentSongIndex + 1 > songs.length -1 ){
          return 0;
        }else {
          return currentSongIndex + 1;
        }
      })
    },[currentSongIndex])

  return (
    <div className='music cardstyle col-3 col-md-12 scrollreveal01 '>
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  )
}

export default ProjectOne
