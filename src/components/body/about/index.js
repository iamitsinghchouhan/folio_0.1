import React from 'react'
import SocialContact from '../../common/social-contacts'
import './about.css'

function About() {
  return (
    <div className='about'>
      <div className='about-top'>
            <div className='about-info'>
            Hello There 👋, I am <br />
          <span className="info-name">Amit Singh</span>.<br /> I am a <span className='info-name-title'>Web Developer</span> <br /> and I code beautifully simple things, <br /> and I love what I do.
            </div>
            <div className='about-photo'>
                <img src={require('../../assets/images/Coding-bro.svg').default} className="picture" alt='reload' />
                
            </div>
      </div>
      <SocialContact/>

      </div>
    
  );
}

export default About
