import React, { useEffect, useContext, useState } from "react";
import { MenuContext } from "../context/MenuContext";
import { db } from "../firebase/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import CancelBtn from "./utilities/CancelBtn";
import  styles  from "./Orders.module.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { deleteOrder, updateOrder } = useContext(MenuContext);

  useEffect(() => {
    const ordersCollection = collection(db, "orders");
    const q = query(ordersCollection, orderBy("date", "desc"));
    const getOrders = onSnapshot(q, (snapshot) =>
      setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    console.log(getOrders)
    return getOrders;
  }, []);
     

    console.log(orders)

  return (
    <div className={styles.ordersContainer}>
      <h1 className={styles.ordersTitle}>Ordenes</h1>
      <div className={styles.orderContainer}>
        {orders.length > 0 ? (
          orders.map((order) => {
            return (
              <div 
              className={ order.status === 'Pendiente' ? styles.orderItem : styles.orderItemReady }
               key={order.id}>
                <button
                  className={styles.orderRemoveBtn}
                  value={order.id}
                  onClick={() => deleteOrder(order.id)}
                >
                  <CancelBtn />
                </button>
                 <button
                  className={order.status === 'Pendiente' ? styles.orderCheckBtn : styles.orderCheckBtnReady }
                  value={order.id}
                  onClick={(e) => updateOrder(e.target.value)}
                >
                 {order.status === 'Pendiente' ? 'Preparar' : 'Listo' }
                </button>
                <h2 className={order.status === 'Pendiente' ? styles.orderStatus : styles.orderStatusFalse}>{order.status}</h2>
                <p className={styles.orderClientInfo}>Cliente</p>
                <p className={styles.orderClientInfoValue}>{order.client}</p>
                <h4 className={styles.orderClientInfo}>Mesa </h4>
                <h4 className={styles.orderClientInfoValue}>{order.table}</h4>
                <div className={styles.orderItemsContainer}>
                <p className={styles.itemsTitle}>Items</p>
                  {order.items.map((pedido, index) => {
                    return (
                      <div  key={index}>
                        <div className={styles.orderItemsName}>
                          <p>{pedido.count}</p>
                          <p>{pedido.item}</p>
                          <p>{pedido.protein}</p>
                        </div>
                        <hr className={styles.separate}/>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <>
            <h3>No hay ordenes pendientes!</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Orders;
