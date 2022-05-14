import React, { useContext, useState, useEffect } from 'react'
import { MenuContext } from '../context/MenuContext';
import './Menu.css';
import Quantity from './Quantity';
import check from "../assets/check.svg"
import CancelBtn from './utilities/CancelBtn';



const Count = ({ order, setOrder, handdleData}) => {

    const [value, setValue] = useState()
    const [quantity, setQuantity] = useState()
    let total;

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

    const getQuantity = (qty) => {
        // console.log(typeof(item))
        // setQuantity(
        //   (currentCant)=> {return[...currentCant, qty]
        //   }
        // )
        setQuantity(new Number(qty))
        console.log(quantity)
    }


  return (
    <div className='count-container'>
        <div className='count-client'>
            <label htmlFor="client" className='count-client-label'> Agregar Cliente</label>
            <input name='client' className='count-input-client' id='input' value={value} onChange={(e) => {handdleInput(e)}} />
            <button className='count-client-btn'><img src={check} alt="check" /> </button>
        </div>
        <div className='count-order'>
              { order.length > 0 ?
                 ( order.map((item, index) =>{
                      return(
                          <div key={index}>
                            <div className='count-item' id={index}>
                                    <Quantity  getQuantity={getQuantity}/>
                                    <h3 className='count-item-info info'>{item.item}</h3>
                                    <h3 className='count-item-info info'>{item.protein}</h3>
                                    <h3 className='count-item-info info'>{`$${ (item.price)*quantity }`}</h3>
                                <button className='order-remove-button' onClick={() => removeItem(index)}>
                                    <CancelBtn />
                                    {/* <img src={cancel} alt="cancel-icon" className='order-icon'/> */}
                                    {/* <p className='remove'>x</p> */}
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
                
                <p>Pedido: {value} </p>
                <h3>Total</h3>
                <h3> $ {total = (order.reduce((previousValue, currentValue) => previousValue + currentValue.price,0))},00
                </h3>
                <p>{total*quantity}</p>
            </div>
            <button className='send-order-button'
            >Enviar a Cocina</button>
        </div>
    </div>
  )
}

export default Count