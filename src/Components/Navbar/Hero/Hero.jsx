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
    function toggleText() {
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
       {/*   <svg
        className="curvy-lines"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          stroke="#e0e0e0"
          strokeWidth="2"
          fill="none"
          d="M100,100 C250,20 400,180 550,100 C700,20 850,180 1000,100 S1200,20 1300,100"
        />
        <path
          stroke="#e0e0e0"
          strokeWidth="2"
          fill="none"
          d="M150,200 C300,100 450,300 600,200 C750,100 900,300 1050,200 S1200,100 1300,200"
        />
        <path
          stroke="#e0e0e0"
          strokeWidth="2"
          fill="none"
          d="M50,300 C200,150 350,450 500,300 C650,150 800,450 950,300 S1100,150 1250,300"
        />
      </svg>*/} 

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