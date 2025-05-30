import React from 'react'
import commuting from '../../assets/commuting.jpg'
import driving from '../../assets/driving.webp'
import Training from '../../assets/training.webp'
import walking from '../../assets/walking.jpg'

import'./Activity.css'

const Activity = () => {
    const activities = [{
        name:'Commuting', 
        img:commuting,
    },
    {
        name:"Driving",
        img:driving, 
    }, 
    {
    name:'On a Walk',
    img:walking,
    },
    {
        name:'Training' ,
        img: Training,
    }

]

  return (
    <div className="activity-section">
        <div className="activity-text"> 
            <h1>Evolve in every environment</h1>
            <p>Seamless learning—whether you're commuting ,driving, on a walk, or working-out.</p>
        </div>
       <div className="cards-container">
    {activities.map(({name ,img }) => (
      <div key={name} className="activity-card">
        <img src={img}  className="activity-image" />
        <div className="activity-label">{name}</div>
      </div>
    ))}
    </div>
    <div className="story-text">
         <h3>EXPERIENCE SO MUCH MORE WITH BLINKIST!!!😉</h3>
         <h5>An App with a world of Knowledge.</h5>
    </div>
    </div>
  );
}

export default Activity