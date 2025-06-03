import React, { useEffect, useState } from 'react';
import './Hero.css';
import Button from '../../Button/Button';
import Blinkists from '../../../assets/Blinkists.jpg';
import Svg from '../../SVG/Svg';

const Hero = () => {
  const [currentComponent, setCurrentComponent] = useState('Blinkist');
  const [isVisible , setIsVisible] = useState(false)

  useEffect(() => {
    const TextArray = ['Blinkist', <Svg />]; 
    let index = 0;
    const TextElement = document.getElementById('ToggleText')
    

    const toggleText = () => { 
        setIsVisible(false);
        TextElement.style.opacity  = 0
        setTimeout(()=>{
            TextElement.style.opacity = 1;
       
          setCurrentComponent(TextArray[index]);
      setIsVisible(true);
      index = (index + 1) % TextArray.length;  
        } , 500)
     }
    
    const interval = setInterval(() => {
      toggleText();
    }, 2000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="Hero">
         

      <div className="content">
        <h1>
          Expand Your <span id="ChangeText">Mind One Day</span> At A Time.
        </h1>
        <br />
        <p>
          Absorb the wisdom of <span id="Changed">influential books</span>,
          thought-provoking <span id="Changes">podcasts</span>, and{' '}
          <span id="Change">brilliant minds</span>—fast and effortlessly with{'  '}
          <span id="ToggleText" className={isVisible ? 'show' : ''}>{currentComponent}</span>
        </p>
        <br />
        <Button
          title={'Review Books'}
          style={{
            padding: '10px',
            width: '250px',
            marginLeft: '-11px',
            textAlign: 'center',
          }}
        />
      </div>
      <div className="img-content">
        <img src={Blinkists} alt="Blinkists" />
      </div>
    </div>
  );
};

export default Hero;