import React, {useEffect}from 'react'
import scrollreveal from 'scrollreveal'
import Comment from '../components/comment/Comment'
import ContactForm from '../components/contactForm/ContactForm'
import ContactInfo from '../components/contactInfo/ContactInfo'
import ContactMap from '../components/map/ContactMap'
import Navbar from '../components/navbar/Navbar'

const Contact = () => {
    useEffect(() => {
        const sr = scrollreveal({
            origin: "top",
            distance: "80px",
            duration: 2000,
            reset: false,
        });
        sr.reveal(
        `
            .contact__header,
            .contact__info__left,
            .contact__info__right,
            .contact__comment,
            .contact__footer
        `,
          {
            opacity: 0,
            interval: 300,
          }
        );
      }, []);
  return (
    <div className='contact'>
        <Navbar item={['꾸준히 배우며 성장하는 모습 보여드리겠습니다.']}/>
        <div className='contact__header'>
            <p>get in touch</p>
            <h1>Contact</h1>
        </div>
        <div className='contact__info'>
            <div className='contact__info__left col-6 col-md-12 '>
                <ContactInfo/>
            </div>
            <div className='contact__info__right col-6 col-md-12 '>
                <ContactForm/>
            </div>
        </div>
        <div className='contact__comment'>
            <Comment/>
        </div>
        <div className='contact__footer col-12 cardstyle'>
            <ContactMap/>
        </div>
    
    </div>
  )
}

export default Contact