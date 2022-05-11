import React, { useContext, useState } from 'react'
import { MenuContext } from '../context/MenuContext';
import './Menu.css';
import cancel from "../assets/cancel.svg"
import minus from "../assets/minus.svg"
import check from "../assets/check.svg"


const Count = ({ order, setOrder}) => {

  const [itemPrice, setItemPrice] = useState();

  const handdlePrice=()=> {
    setItemPrice(
        (currentPrice)=> {
           return[...currentPrice + itemPrice]
        }
      )
  }

  const removeItem = (id) => {
      const removedItem = order.filter((remove, i) => i !== id);
      console.log(id)
      console.log(removedItem)
      setOrder(removedItem)
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
                  order.map((item, index) =>{
                      return(
                          <div key={index}>
                            <div className='count-item' id={index}>
                                <span className=''> 1 </span>
                                <h3 className='count-item-info info'>{item.item}</h3>
                                <h3 className='count-item-info info'>{item.protein}</h3>
                                <h3 className='count-item-info info'>{`${item.price}$`}</h3>
                            <button className='order-remove-button' onClick={() => removeItem(index)}>
                                {/* <img src={cancel} alt="cancel-icon" className='order-icon'/> */}
                                <p className='remove'> x </p>
                            </button>
                            </div>
                            <hr className='separate'/> 
                            {/* <CountItem item={item}/> */}
                          </div>
                      )
                  })
              }
        </div>
        <div className='count-total'>
            <div className='count-total-sum'>
                <h3>Total</h3>
                <h3>$ 0.00</h3>
            </div>
            <button className='send-order-button'>Enviar a Cocina</button>
        </div>
    </div>
  )
}

export default Count