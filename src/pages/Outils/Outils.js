import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../../components/Header/Header";

const Outils = () => {
  return (
    <div data-testid="outils">
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Outils