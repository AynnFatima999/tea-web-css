import React from 'react'
import '../style/contact.css'
import Link from 'next/link'

const Contact = () => {
  return (
    <section className='contact-section' id='contact'>
    <div className="contact">
    <div className="heading4">
          <h1>GET IN TOUCH</h1>
        </div>
        <div className="circle">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        {/* Heading over */}
        <div className="con-wrap">
          <input type="text" placeholder='Your Name' />
          <input type="text" placeholder='Your Email'/>
          <input type="text" placeholder='Your Phone' />
          <textarea rows={8} placeholder='Message' ></textarea> 
        
        <Link href='#hero'>
            <button id="b6">
              SEND</button></Link>
              </div>
    </div>
    </section>
  )
}

export default Contact
