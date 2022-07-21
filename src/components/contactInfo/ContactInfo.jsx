import React from 'react'
import './contactInfo.scss'

const ContactInfo = () => {
  return (
    <div className='contact-info col-8 col-sm-12'>
        <div className='contact-info__phone cardstyle'>
            <span className='round'><i className='bx bxs-phone'></i></span>
            <span>+1040082360</span>
        </div>
        <div className='contact-info__email cardstyle'>
            <span className='round'><i className='bx bxs-envelope' ></i></span>
            <span>zaar625@naver.com</span>
        </div>
        <div className='contact-info__live cardstyle'>
            <span className='round'><i className='bx bxs-map'></i></span>
            <span>Gwanak / Seoul</span>
        </div>
    </div>
  )
}

export default ContactInfo