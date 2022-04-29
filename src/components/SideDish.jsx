import React from "react"
import './Menu.css';


const SideDish = ({sideDish}) => {
    
      return (
        <div>
            <ul>
                {
                    sideDish.map((item)=>{
                        return(
                            <button key={item.id}
                            className="menu-item"
                            > 
                                <h2>{item.item}</h2>
                                {item.protein}
                                <h2>{`${item.price} $`}</h2>
                            </button>
                        )
                    })
                }
            </ul>
        </div>
      )
    }

export default SideDish;
    