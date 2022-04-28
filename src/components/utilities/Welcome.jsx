import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Logo from "../../assets/burger-queen-logo.svg"


const Welcome = () => {
  return (
    <div className='welcome-menu'>
     <div className='logo-container'>
     <img src={Logo} alt='burger-queen' className='logo'/>
     </div>
     <Link to="/mesa" className='route'> Mesas </Link>
     <Link to="/cocina" className='route'> Cocina </Link>
    </div>
  )
}

export default Welcome