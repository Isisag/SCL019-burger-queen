import React from 'react'
import { Link } from 'react-router-dom'
import back from "../../assets/back.svg"

const BackBtn = () => {
  return (
    <div>
    <Link to="/">
      <img src={back} width="30vh"/>
    </Link>
    </div>
  )
}

export default BackBtn