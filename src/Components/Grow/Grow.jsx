import React, { useState } from 'react'
import './Grow.css'
import guides from './../../assets/guides_mobile.png';
import booksummaries from './../../assets/booksummaries.webp';
import spacemobile from './../../assets/spaces_mobile.webp';
const Grow = () => {


const[currentIndex , setCurrentIndex] =  useState(0)
function RightArrow(){
    if(currentIndex < 2){
        setCurrentIndex(currentIndex + 1)
    }
  
};

function LeftArrow(){
    if(currentIndex > 0){
        setCurrentIndex(currentIndex - 1)
    }
};
  return (
    <div className='container3'>
        <div className="grow-text"> <h1>"What’s your strategy for improvement?" </h1>
        <p>Whatever your style—audio, text, or hands-on—you’ll find the perfect way to learn here.</p>
</div>
       
        <div className="slider-container">
       {/*<button class="arrow left-arrow" onClick={RightArrow}>←</button>*/} 
  <div className="cards">
    
    <div className  ="cards1" style={{
        backgroundColor:"#D6E9FF"
    }}>
         <div className="cards1-text">
             <h5 className='note'><span className="note1">Best books, distilled</span> into easy takeways</h5>
      <p className="space">Get powerful ideas in minutes—not hours or days with our summaries of today’s most transformative books.</p>
 </div>
   <div className="img-connect">
    <img src={booksummaries} />
   </div>
    </div>
    <div className="cards1" style={{backgroundColor:"#EBE6FF"}}>
        <div className="cards1-text">
             <h5 className='note'><span className="note2">Wisdom on demand straight</span> to your ears</h5>
      <p className="space">Let a pro lead you through today’s must-know topics and apply what you learn right away with interactive tools and activities.</p>
 </div>
       <div className="img-connect">
              <img src={guides}  />
        </div>
     
        
   
    </div>
    <div className="cards1">
    <div className="cards1-text">
             <h5 className='note'><span className="note3">Collaborative learning made </span>easy with Spaces</h5>
      <p className="space">Make a learning playlist for yourself, share with others (you can finally start that book club!), or follow thought leaders’ Spaces to get inspired.</p>
 </div>
   <div className="img-connect">
    <img src={spacemobile} />
   </div>
    </div>
  </div>
 {/*<button class="arrow right-arrow" onClick={LeftArrow}>→</button>*/} 
</div>
    </div>
  )
}


export default Grow