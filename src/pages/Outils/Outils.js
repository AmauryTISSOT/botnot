import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../../components/Header/Header";
import "./Outils.css"

const Outils = () => {
  return (
    <div data-testid="outils" className='outils-container'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Outils