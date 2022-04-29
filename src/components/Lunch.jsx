import React from 'react'
import './Menu.css';



const Lunch = ({burgers}) => {

// const aditional = menu.lunch[3]

  return (
    <div>
        <ul>
        {
            burgers.map((item)=>{
                return(
                    <>
                        <button key={item.id}
                        className="menu-item"
                        onClick={console.log('a')}
                        > 
                        <h2>{item.item}</h2>
                        {item.protein}
                        <h2>{`${item.price} $`}</h2>
                        </button>
                    </>
                    
                )
            })
        }
        </ul>
        
    </div>
  )
}

export default Lunch;