import React from 'react'
import logo from './Images/logo.svg'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

import './sass/styles.css'
const Navbar = () => {
    const [responsivenes, setresponsivenes] = useState(false);

    
  return (
    <div>
        <nav>
            <span className='logo'><img src={logo} /> <h1> Lilies </h1> </span>
            <ul className={responsivenes ? 'navlinkShow' : 'navlinksHide'} onClick={()=>setresponsivenes(false)}>
                <li>Home</li>
                <li>Login</li>
                <li><button className='signUp'>Sign Up</button></li>
            </ul>
            <button className='toggle' onClick={()=>setresponsivenes(!responsivenes)}>{
              responsivenes ? <FaTimes/> : <FaBars/>
            }</button>
        </nav>

    </div>
  )
}

export default Navbar