import React,{useEffect, useContext, useState} from 'react'
import { MenuContext } from '../context/MenuContext'
import { db } from '../firebase/firebase';
import { collection, onSnapshot, query, orderBy, 
} from "firebase/firestore";

const Orders = () => {

  const [orders, setOrders] = useState([])
  const { onGetOrders, getOrders, deleteOrder } = useContext(MenuContext)

  useEffect(() => {

    // getOrders().then((item)=>{
    //   console.log(item)
    //   setOrders(item)
    // })

    const ordersCollectionRef = collection(db, "orders");
    const q = query(ordersCollectionRef, orderBy("date", "desc"));
    const getOrders = onSnapshot(q, (snapshot) =>
      setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    ); 
    return getOrders;
  }, [])
    
  return (
      <div>
        Orders!
      <ul>
    
        {
        orders.map((order) => {
          return(
            <>
              <button value={order.id} onClick={(e) => deleteOrder(e.target.value)}>x</button>
              <p>{order.client}</p>
              <p>{order.status}</p>
              <ul>{order.items.map((pedido)=>{
                return(
                  <>
                  <p>{pedido.item}</p>
                  <p>{pedido.price}</p>
                  </>
                )
              })}</ul>
            </>
          )
        })
        }

    </ul>
      

      </div>
  )
}

export default Orders