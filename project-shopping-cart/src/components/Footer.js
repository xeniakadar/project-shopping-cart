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
        <p className='photo-info'>Photo by <a href="https://unsplash.com/@bluewaterglobe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bluewater Sweden</a> on <a href="https://unsplash.com/photos/4Kd3svPFuEI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
      </div>

      <ul className='footer--infolinks'>
        <li>about</li>
        <li>our story</li>
        <li>help</li>
        <li>FAQ</li>
        <li>contact us</li>
      </ul>

    </div>
  )
}
