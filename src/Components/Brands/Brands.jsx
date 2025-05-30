import React from 'react'
import'./Brands.css'
import microsoft from '../../assets/microsoft.png'
import linkedin from '../../assets/linkedin.png'
import tiktok from '../../assets/tiktok.png'
import babbel from '../../assets/babbel.png'
import zalando from '../../assets/zalando.png'
import lyft from '../../assets/lyft.png'
const Brands = () => {
  return (
    <div className='brands-section'>
        <h1>Preferred by the biggest names in business</h1>
        <div className="brands-logo">
            <div className="brands">
                <img src={microsoft} className='img-brands'/>
             </div>
             <div className="brands">
                        <img src={linkedin}  className='img-brands' />
         </div>
         <div className="brands">
                        <img src={tiktok}  className='img-brands' />
         </div>
         <div className="brands">
                        <img src={babbel}  className='img-brands' />
         </div>
         <div className="brands">
                        <img src={zalando}  className='img-brands' />
         </div>
         <div className="brands">
                        <img src={lyft}  className='img-brands' />
         </div>
     
        </div>
    </div>
  )
}

export default Brands