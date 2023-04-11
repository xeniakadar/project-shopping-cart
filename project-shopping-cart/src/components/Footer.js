import React from 'react';
import "../styles/footer.css"


export default function Footer(props) {
  return (
    <div className='footer--container'>
      <div className='footer--signup'>
        <p>Sign up for free shipping</p>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='example@email.com'
        />
        <button onClick={() => props.addFreeShipping()} className='footer-signupbtn'>submit</button>

      </div>
      <div className='footer--info'>
        <div className='footer--infolinks'>
          <p>about</p>
          <p>our story</p>
        </div>
        <div className='footer--infolinks'>
          <p>help</p>
          <p>FAQ</p>
          <p>contact us</p>
        </div>

      </div>

    </div>
  )
}
