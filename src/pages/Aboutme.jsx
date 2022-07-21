import React,{useEffect} from 'react';
import scrollreveal from 'scrollreveal';
import Intro from '../components/Intro/Intro';
import Lottie from '../components/lottie/Lottie'
import Navbar from '../components/navbar/Navbar'
import Skill from '../components/skill/Skill'


const Aboutme = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        .intro,
        .lottie,
        .skill
    `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    // 라우터구간
    <>
      <Navbar item={['긍정적인', '배움을 즐기는', '열정있는']}/> 
      <div className='about__me'>
        <div className='mine col-7 col-md-12'>
          <Intro/>
          <Skill/>
        </div>
          <Lottie/>
      </div>
    </>
  )
}

export default Aboutme