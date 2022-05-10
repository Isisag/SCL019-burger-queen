import { type } from "@testing-library/user-event/dist/type";
import React,{ createContext, useState, useEffect } from "react";
import menu from "../menu.json"


export const MenuContext = createContext()

const MenuContextProvider = ({children}) =>{

    const [menuChoose, setMenuChoose] = useState('a')

    const [breakfast, setBreakfast] = useState([])
    const [burgers, setBurgers] = useState([])
    const [sideDish, setSideDish] = useState([])
    const [drinks, setDrinks] = useState([])
    const [allMenu, setAllMenu] = useState([])
    
    const handleButton = () => {
      return console.log('si !')
    }

    useEffect(() => {
      setBreakfast(menu.breakfast)
      setBurgers(menu.lunch[0])
      setSideDish(menu.lunch[1])
      setDrinks(menu.lunch[2])
      setMenuChoose(handleButton)
    }, [])
    

    return(
        <MenuContext.Provider value={{breakfast, burgers, sideDish, drinks, menuChoose, setMenuChoose }} >
                {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider;