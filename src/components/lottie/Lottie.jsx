import React, { useEffect,useRef } from 'react'
import lottie from 'lottie-web';
import animationData from './99065-code-cantileverlabs-ilustration.json'

const Lottie = () => {

    const container = useRef();

    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            render:'svg',
            loop:true,
            autoplay: true,
            animationData:animationData,
        })
    },[])
  return (
    <div className='lottie col-5'>
      <div ref={container} ></div>
    </div>
  )
}

export default Lottie
