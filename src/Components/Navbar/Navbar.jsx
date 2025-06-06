import React from 'react'
import './Navbar.css' 
import Button from '../Button/Button'
import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {

   function showSidebar(){
  document.querySelector('.sidebar').classList.add('open');

   }

  return (
    <div className="Navbar">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134 26" enableBackground="new 0 0 134 26" color="#03314B" className="m:h-6 h-5">
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
        <ul className="List">
            <li className='HideonMobile'>For Buisness</li>
            <li className='HideonMobile'>For Individuals</li>
                  <div className="mobile-actions">
              <Button className={"get-started"} title={"Get Started"}/>
                        <li className="menu-button"><a href="#"><svg xmlns="http://www.w3.org/2000/svg"onClick={showSidebar} height="30px" viewBox="0 -960 960 960" width="50px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                        </svg>
                        </a>
                        </li>
                        </div>
        </ul>
           <Sidebar />
      
        
    </div>
  )
}

export default Navbar