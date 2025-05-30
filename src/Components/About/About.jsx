import React from 'react'
import'./About.css'
import audio from '../../assets/audio.png'
import brrrain from '../../assets/clipart.png'
import read from '../../assets/read.png'
const About = () => {
  return (
    <div className='container'>
        <h1>Decode critical knowledge effortlessly in a <span className='time'>quarter of an hour</span>
        </h1>
        <p className='pp'> Explore unmatched wisdom and inspiration all in one place. </p>
        <div className="text">
            <div className="insights">
                <div className="icon">
              <img src={audio} className='img-icon'/>
                </div>
                <h1 className='header'>Crystal-Clear Logic </h1>
                <p className='para'>We break down tricky concepts into clear, simple explanations—no more struggling with dense books.</p>
            </div>
            <div className="insights2">
                <div className="icon">
                    <img src={brrrain} className='img-icon'/>
                </div>
                <h1 className='header'> Ignite your sense of wonder</h1>
                <p className='para'> Find the perfect read with personal recommendations across a massive collection. Over 7,500+ titles and topics.</p>
            </div>
            <div className="insights3">
                <div className="icon">
                    <img src={read} className='img-icon'/>
                </div>
                <h1 className='header'> Wisdom at your fingertips</h1>
                <p className="para">Unlock expert wisdom through curated lessons and exclusive content.</p>
                
            </div>
        </div>
    </div>
  )
}

export default About