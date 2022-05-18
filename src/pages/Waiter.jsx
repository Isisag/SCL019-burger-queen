import React, {useState, useContext} from 'react'
import { MenuContext } from '../context/MenuContext.js'
import Menu from '../components/Menu.jsx'
import BackBtn from '../components/utilities/BackBtn.jsx'
import "../App.css"

const Waiter = () => {
  
  const {breakfast, burgers, sideDish, drinks, allMenu } = useContext(MenuContext)
  // ciclo de vida con hooks 

  return (
    <div>
      <BackBtn />
      <Menu 
        breakfast={breakfast}
        burgers={burgers}
        sideDish={sideDish}
        drinks={drinks}
      />
    </div> 
  )
}

export default Waiter