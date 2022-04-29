import React from 'react'
import burgerQueen from "../assets/burger-queen-02.svg"
import './Menu.css';

// import menu from "../menu.json"


const Breakfast = ({breakfast}) => {
  return (
    <div>
        <ul>
        {
            breakfast.map((item)=>{
                return(
                    <button key={item.id}
                    className="menu-item"
                    > 
                    <h2>{item.item}</h2>
                    <h2>{`${item.price} $`}</h2>
                    </button>
                )
            })
        }
        </ul>
    </div>
  )
}

export default Breakfast