import React, { useContext, useState, useEffect } from 'react'
import { MenuContext } from '../context/MenuContext';
import './Menu.css';
import Quantity from './Quantity';
import check from "../assets/check.svg"
import CancelBtn from './utilities/CancelBtn';

const Count = ({ order, setOrder}) => {

    const { createOrder } = useContext(MenuContext)
    const [value, setValue] = useState()
    const [quantity, setQuantity] = useState()
    const [isToggleOn, setIsToggleOn] = useState(true)

    let total;

    //* Elimina duplicados de la orden!
    let orderDuplicates = new Set( order.map( JSON.stringify ) )
    order = Array.from( orderDuplicates ).map( JSON.parse );

    const removeItem = (id) => {
        const removedItem = order.filter((remove, i) => i !== id);
        console.log(id)
        console.log(removedItem)
        setOrder(removedItem)
    }

    const handdleInput = (e) => {
        setValue(e.target.value)
        console.log(e.target.value)
    }

     const handleClick = () =>{
        createOrder(value,order)
        setIsToggleOn(!isToggleOn)
        // setOrder([])
        setValue('')
    }

    const getQuantity = (cant) => {
        
        // console.log(qty)
        // setQuantity(parseInt(qty))
        // setQuantity(cant)
        // cantidad = quantity;
        // console.log((cant))

    }

    const getTotalPrice = (price)=>{
        console.log(price)
        // setQuantity(price)
    }


  return (
    <div className='count-container'>
        <div className='count-client'>
            <label htmlFor="client" className='count-client-label'>Agregar Cliente</label>
            <input name='client' className='count-input-client' placeholder='Nombre del cliente' id='input' value={value} onChange={(e) => {handdleInput(e)}} />
            <button className='count-client-btn'><img src={check} alt="check"/></button>
        </div>
        <div className='count-order'>
              { order.length > 0 ?
                 (order.map((item, index) =>{
                      return(
                          <div key={index}>
                            <div className='count-item' id={index}>
                                    <Quantity getQuantity={getQuantity} setQuantity={setQuantity} price={item.price} getTotalPrice={getTotalPrice} quantity={quantity} order={order} setOrder={setOrder} />
                                    <h3 className='count-item-info info'>{item.item}</h3>
                                    {console.log(item.item)}
                                    <h3 className='count-item-info info'>{item.protein}</h3>
                                    {/* {!isNaN(quantity) 
                                    ? <h3 className='count-item-info info'> $ {(Number(item.price)*Number(quantity))} </h3> 
                                    : 'a'  }  */}    
                                <button className='order-remove-button' onClick={() => removeItem(index)}>
                                    <CancelBtn />
                                </button>
                            </div>
                            <hr className='separate'/>
                          </div>
                      )
                  }))
                : <div className='count-noitems'>
                    <p> Selecciona un producto del menú para agregarlo a la orden </p>
                  </div> 
              }
        </div>
        <div className='count-total'>
            <div className='count-total-sum'>
                <p>Cliente: {value} </p>
                <h3> <b>Total</b> $ {total = (order.reduce((previousValue, currentValue) => previousValue + currentValue.price,0))},00
                </h3>                
            </div>

            {/* <h3>----cantidad{quantity*total}</h3> */}
            <button className={isToggleOn ? 'send-order-button' : 'send-order-button send-order-button-active' }
                    onClick={handleClick}>
              {isToggleOn ? 'Enviar a Cocina' : 'Enviado'}
            </button>
        </div>
    </div>
  )
}

export default Count