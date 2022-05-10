import React, { useContext, useState } from 'react'
import { MenuContext } from '../context/MenuContext';
import './Menu.css';


const Count = ({ handdleData, order ,elemento}) => {

  const {breakfast, sideDish, burgers, drinks, menuChoose, setMenuChoose} = useContext(MenuContext)
  
  const [itemPrice, setItemPrice] = useState();

  const handdlePrice=()=> {
    setItemPrice(
        (currentPrice)=> {
           return[...currentPrice + itemPrice]
        }
      )
  }

  return (
    <div className='count-container'>
        <div className='count-client'>
            <label htmlFor="client"> Agregar Cliente</label>
            <input name='client'/>
            <button> listo </button>
        </div>
            <hr />
        <div className='count-order'>
              {
                  order.map((item) =>{
                      return(
                          <>
                            <div className='count-item'>
                            <hr />
                                {item.item}
                                {item.price}
                            </div>
                            {/* <CountItem item={item}/> */}
                          </>
                      )
                  })
              }
        </div>
        <div className='count-total'>
            <h3>Total</h3>
            <h3>$ 0.00</h3>
            <button>Enviar a Cocina</button>
        </div>
    </div>
  )
}

export default Count