
import './App.css'
import LoginPage from './Components/LoginPage/LoginPage'
import About from './Components/About/About'
import Activity from './Components/Activities/Activity'
import Brands from './Components/Brands/Brands'
import Footer from './Components/Footer/Footer'
import Grow from './Components/Grow/Grow'
import Knowledge from './Components/Knowledge/Knowledge'
import Hero from './Components/Navbar/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import { useState } from 'react';

function App() {
  const [isLoggedIn , setiisLoggedIn] = useState(false);
  function handleLogin(){
    setiisLoggedIn(true)
  }
  if(!isLoggedIn){
    return <LoginPage onLogin = {handleLogin} />
  }
 
  return (
    <>
   
  <Navbar/>
  <Hero/>
  <About/>
  <Brands/>
  <Knowledge/>
  <Grow/>
  <Activity/>
  <Footer/>
    </>
  )
}

export default App
