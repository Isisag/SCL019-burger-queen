import React from 'react'
import burgerQueen from "../assets/burger-queen-02.svg"
import './Menu.css';

// import menu from "../menu.json"


const Breakfast = ({breakfast, getItem}) => {


  return (
    <div className='item-container'>
        {
            breakfast.map((item)=>{
                return(
                    <button key={item.id}
                    className="menu-item"
                    onClick={() => {getItem(item)}}
                    value={item.item}
                    > 
                    <h2>{item.item}</h2>
                    <h1>{`${item.price} $`}</h1>
                    </button>
                )
            })
        }
    </div>
  )
}

export default Breakfast