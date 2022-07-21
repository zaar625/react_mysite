import React, {useState} from 'react'
import './contactform.scss'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  return (
    <div className='contact__form col-8 col-sm-12 cardstyle'>
    <form method='post'>
        <div className="contact__form__group">
            <label htmlFor="name">
                Your Name
                <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>
        </div>
        <div className="contact__form__group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="contact__form__group">
            <label htmlFor="message">
                Your message
                <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
            </label>
        </div>
        <button type="submit">Send</button>
    </form>
    </div>
  )
}

export default ContactForm