import React,{ createContext, useState, useEffect } from "react";
import menu from "../data/menu.json"
import { db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
// import { getFirestore, collection } from "firebase/firestore"


export const MenuContext = createContext()

const MenuContextProvider = ({children}) =>{

    const createPost = (title) => {
      addDoc(collection(db, 'orders'),{
        title
      })
    }

    const [breakfast, setBreakfast] = useState([])
    const [burgers, setBurgers] = useState([])
    const [sideDish, setSideDish] = useState([])
    const [drinks, setDrinks] = useState([])

    
    const handleButton = () => {
      return console.log('si !')
    }

    useEffect(() => {
      setBreakfast(menu.breakfast)
      setBurgers(menu.lunch[0])
      setSideDish(menu.lunch[1])
      setDrinks(menu.lunch[2])
    }, [])
    

    return(
        <MenuContext.Provider value={{breakfast, burgers, sideDish, drinks  }} >
                {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider;