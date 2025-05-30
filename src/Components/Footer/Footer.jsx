import React from 'react'
import './Footer.css'
import { useEffect } from 'react';
import Button from '../Button/Button';
import app from '../../assets/app.png'
import play from '../../assets/play.png'
import envelope from '../../assets/envelope (3).png'
import Location from '../../assets/location.png'
import Svg from '../SVG/Svg';

const Footer = () => {
   

  return (
    <div className='footer'>
        <div className="footer-pag">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134 26" enableBackground="new 0 0 134 26" color="#03314B" className="m:h-6 h-5 " >
        <path  fill="#2CE080" d="M19.8,0l-6,6l-6-6C3.1,2.2,0,6.9,0,12.3C0,19.9,6.1,26,13.7,26 c7.6,0,13.8-6.1,13.8-13.7C27.5,6.9,24.3,2.2,19.8,0z"></path>
        <path fill="#03314B" d="M17.4,9.6L13.7,6l-3.6,3.6c-2,2-2,5.3,0,7.3c2,2,5.3,2,7.3,0 C19.4,14.9,19.4,11.6,17.4,9.6z"></path>
        <path fill="currentColor" d="M44.1,16.7c0-1.1-0.8-1.7-1.9-1.7h-3.8v3.3h3.8 C43.4,18.3,44.1,17.8,44.1,16.7z M38.4,7.7V11h1.8c1.2,0,1.9-0.7,1.9-1.7c0-1-0.7-1.7-1.9-1.7H38.4z M49,16.9c0,3.3-2.8,5.7-6.5,5.7 h-8.9v-19h6.9c3.7,0,6.5,2.2,6.5,5.6c0,1.3-0.4,2.4-1.2,3.2C47.8,13.1,49,14.6,49,16.9z"></path>
        <path fill="currentColor" d="M51.4,22.5h5V0.9h-5V22.5z"></path>
        <path fill="currentColor" d="M59.6,22.5h5V8.1h-5V22.5z M65.2,3c0,1.6-1.4,2.9-3.1,2.9 c-1.7,0-3-1.3-3-2.9c0-1.7,1.4-2.9,3-2.9C63.8,0.1,65.2,1.3,65.2,3z"></path>
        <path fill="currentColor" d="M82,13.6v8.9h-5v-8.2c0-1.3-0.9-2.1-2.1-2.1 c-1.2,0-2.1,0.8-2.1,2.1v8.2h-5V8.1h4.5v1.2c1-0.9,2.4-1.5,4.1-1.5C79.9,7.8,82,10.1,82,13.6z"></path>
        <path fill="currentColor" d="M95.3,22.5l-5.2-7.6v7.6h-5V0.9h5v13l4.5-5.8h5.8l-5,6.4l5.3,8 H95.3z"></path>
        <path fill="currentColor" d="M102.4,22.5h5V8.1h-5V22.5z M107.9,3c0,1.6-1.4,2.9-3.1,2.9 c-1.7,0-3-1.3-3-2.9c0-1.7,1.4-2.9,3-2.9C106.5,0.1,107.9,1.3,107.9,3z"></path>
        <path fill="currentColor" d="M121.3,9.9l-2.3,3c-1-0.8-2-1.2-3.1-1.2c-0.6,0-1,0.1-1,0.5 c0,0.4,0.3,0.5,1,0.8l1.4,0.6c2.6,1,4.2,2.1,4.2,4.5c0,3-2.5,4.8-6,4.8c-2.6,0-4.9-1-6.2-2.8l2.3-2.9c1.2,1.2,2.6,1.8,4,1.8 c0.7,0,1.3-0.1,1.3-0.6c0-0.3-0.3-0.5-0.8-0.7l-1.6-0.7c-2.6-1.1-4.2-2.2-4.2-4.6c0-2.9,2.3-4.6,5.6-4.6 C118,7.7,119.9,8.4,121.3,9.9z"></path>
        <path fill="currentColor" d="M134,18.4v4.2c-0.8,0.2-1.8,0.3-2.9,0.3c-4,0-6.4-1.9-6.4-5.9v-4.8 h-2.2V8.1h2.2V4.6h5v3.5h3.9v4.2h-3.9v4.3c0,1.4,0.7,1.9,2.5,1.9C132.6,18.4,133.2,18.4,134,18.4z"></path>
</svg>
          
          
         
             <div className="lists">
               <a href='#'><img src={app}className='app' /></a>
               <a href='#'><img src={play}className='app' /></a>
             </div>
            </div>
            <hr></hr>
            <div className="class-lists">
              <div className="quick-links">
                <h3 className='menu'>Menu</h3>
                <ul className="footer-menu">
                  <li>Home</li>
                  <li>Our Content</li>
                  <li>Pricing</li>
                  <li>About</li>
                  
                </ul>
              </div>
              <div className="quick-links">
                <h3 className='menu'>Popular Categories</h3>
                <ul className="footer-menu">
                  <li>Leadership & Strategy</li>
                  <li>Productivity</li>
                  <li>Personal Development</li>
                  <li>Health & Wellness</li>
                  <li>Science &Technology</li>
                  <li>Creativity</li>
                  <li>Finance & Economics</li>
                  <li>Relationships</li>
            
                </ul>
                </div>
                <div className="quick-links2">
                <h3 className='menu'>Popular Titles</h3>
                <ul className="footer-menu">
                  <li>Rich Dad, Poor Dad</li>
                  <li>12 Rules for Life</li>
                  <li>Do</li>
                  <li>Atomic Habits</li>
                  <li>Zero to One</li>
                  <li>Think and Grow Rich</li>
                  <li>The Subtle Art of Not Giving A F*ck</li>
                  <li>Thinking, Fast And Slow</li>
            
                </ul>
                </div>
                <div className="quick-links2">
                <h3 className='menu'>Popular Topics</h3>
                <ul className="footer-menu">
                  <li>Best Christianity Books</li>
                  <li>Best Memoirs Books</li>
                  <li>Best Self-help Books</li>
                  <li>Best Love Books</li>
                  <li>Best Leadership Books</li>
                  <li>Best Persuasive Books</li>
                  <li>Best Inspiration Books</li>
                  <li>Best Spiritual Books</li>
            
                </ul>
                </div>
                <div className="quick-links2">
                <h3 className='menu'>Help</h3>
                <ul className="footer-menu">
                  <li>
                    <span className="img-footer">
                      
                        <img src={envelope}/>
                    </span>
                   
                       help@Blinkist.com
                  </li>
<li>
          <span className="img-footer">
                  <img src={Location}/>
          </span>
               Location
                 </li>
            
                </ul>
                </div>
            </div>
            <hr></hr>
            <div className="footer-social">
              <div className="first-text">
                <p>Crafted by Judah4Good © 2025 Blinkist | All Rights Reserved</p>
              </div>
              <div className="card">
  <a className="socialContainer containerOne" href="#">
    <svg viewBox="0 0 16 16" className="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
  </a>
  
  <a className="socialContainer containerTwo" href="#">
    <svg viewBox="0 0 16 16" className="socialSvg twitterSvg"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>              </a>
    
  <a className="socialContainer containerThree" href="#">
    <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
  </a>
  
  <a className ="socialContainer containerFour" href="#">
    <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
  </a>
</div>             


            </div>
        </div>

  )
}

export default Footer