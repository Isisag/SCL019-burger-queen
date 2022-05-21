import React, { useEffect, useContext, useState } from "react";
import { MenuContext } from "../context/MenuContext";
import { db } from "../firebase/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import CancelBtn from "./utilities/CancelBtn";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { deleteOrder, updateOrder } = useContext(MenuContext);

  useEffect(() => {
    const ordersCollection = collection(db, "orders");
    const q = query(ordersCollection, orderBy("date", "desc"));
    const getOrders = onSnapshot(q, (snapshot) =>
      setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return getOrders;
  }, []);

  return (
    <div className="orders-container">
      <h1>Ordenes</h1>
      <div className="order-container">
        {orders.length > 0 ? (
          orders.map((order) => {
            return (
              <div className="order-item">
                <button
                  className="order-remove-btn"
                  value={order.id}
                  onClick={(e) => deleteOrder(e.target.value)}
                >
                  <CancelBtn />
                </button>
                <p>Cliente {order.client}</p>
                <p>Estado {order.status}</p>
                <p>Mesa {order.table}</p>
                <ul>
                  {order.items.map((pedido) => {
                    return (
                      <div>
                        {/* <input type="checkbox" name="" id="" /> */}
                        <p>{pedido.count}</p>
                        <p>{pedido.item}</p>
                      </div>
                    );
                  })}
                </ul>
                <button
                  value={order.id}
                  onClick={(e) => updateOrder(e.target.value)}
                >
                  lista
                </button>
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
