import React from 'react'
import './Navbar.css'
import Navlist from './navlist/Navlist'
import Button from '../../shared/button/Button'
import { CiLogin } from "react-icons/ci";

function Navbar() {
  return (
    <nav>
        <img src="excelrlogo1.jpg" alt="excelrlogo" />
        <Navlist />
        <Button mytext="SIGN IN" icon= {<CiLogin/>} /> 
    </nav>
   
  )
}

export default Navbar