import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu.jsx'

const WaiterView = () => {
  return (
    <>
    <div>WaiterView</div>
    <Menu />
    <Link to="/"> Volver </Link>
    </>
  )
}

export default WaiterView