import React, { useContext, useState, useEffect } from "react";
import { MenuContext } from "../context/MenuContext";
import "./Menu.css";
import Quantity from "./Quantity";
import check from "../assets/check.svg";
import CancelBtn from "./utilities/CancelBtn";

const Count = ({ order, setOrder }) => {
  const { createOrder } = useContext(MenuContext);
  const [value, setValue] = useState();
  const [isToggleOn, setIsToggleOn] = useState(true);
  const [tables, setTables] = useState([]);

  let total;
  let subtotal;
  let tip;
 
  let orderDuplicates = new Set(order.map(JSON.stringify));
  order = Array.from(orderDuplicates).map(JSON.parse);

  useEffect(() => {
    setTables([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  }, []);

  const removeItem = (id) => {
    const removedItem = order.filter((remove, i) => i !== id);
    console.log(id);
    console.log(removedItem);
    setOrder(removedItem);
  };

  const handdleInput = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    createOrder(value, order, tables);
    setIsToggleOn(isToggleOn);
    setOrder([]);
    setValue("");
    setIsToggleOn(order === [] ? !isToggleOn : isToggleOn);
  };

  const addItemQty = (id) => {
    if(order.some((item) => item.id === id)){
        const idproduct= order.map((item) => item.id === id ? 
        { ...item, count: item.count + 1} : item
        )
        setOrder(idproduct)
      }else{setOrder([
          ...order,
          {id:id, item: order.item, price:order.price, count: 1}
      ])
    }
  };

  const subsItemQty = (id) => {
    const rest = order.map((item) => {
      if (item.count > 1) {
        return item.id === id ? { ...item, count: item.count - 1 } : item;
      } else {
        return item.id === id ? { ...item, count: 1 } : item;
      }
    });
    setOrder(rest);
  };

 
  console.log(order);

  return (
    <div className="count-container">
      <div className="count-client">
        <label htmlFor="client" className="count-client-label">
          Agregar Cliente
        </label>
        <input
          name="client"
          className="count-input-client"
          placeholder="Nombre del cliente"
          id="input"
          value={value}
          onChange={(e) => {
            handdleInput(e);
          }}
        />
        <select>
          {tables.map((table) => (
            <option>{table}</option>
          ))}
        </select>
        <button className="count-client-btn">
          <img src={check} alt="check" />
        </button>
      </div>
      <div className="count-order">
        {order.length > 0 ? (
          order.map((item, index) => {
            return (
              <div key={index}>
                <div className="count-item" id={index}>
                  <Quantity
                    addItemQty={addItemQty}
                    subsItemQty={subsItemQty}
                    id={item.id}
                    qty={item.count}
                    price={item.price}
                  />
                  <h3 className="count-item-info info">{item.item}</h3>
                  <h3 className="count-item-info info">{item.protein}</h3>
                  <button
                    className="order-remove-button"
                    onClick={() => removeItem(index)}
                  >
                    <CancelBtn />
                  </button>
                </div>
                <hr className="separate" />
              </div>
            );
          })
        ) : (
          <div className="count-noitems">
            <p> Selecciona un producto del menú para agregarlo a la orden </p>
          </div>
        )}
      </div>
      <div className="count-total">
        <div className="count-total-sum">
          <p>Cliente: {value} </p>
          <h3>Tip: {
              (tip = order.reduce(
                (previousValue, currentValue) =>
                  previousValue + currentValue.price * currentValue.count,
                0
              )*10/100)
              }</h3>
          <h3>
            {" "}
            <b>Subtotal</b> ${" "}
            {
              (subtotal = order.reduce(
                (previousValue, currentValue) =>
                  previousValue + currentValue.price * currentValue.count,
                0
              ))
            }
            ,00
          </h3>
          <h3>Total: {subtotal + tip}</h3>
          {/* <p>Tip 10%: {(total*10/100)}</p> */}
        </div>
        <button
          className={
            isToggleOn
              ? "send-order-button"
              : "send-order-button send-order-button-active"
          }
          onClick={handleClick}
        >
          {isToggleOn ? "Enviar a Cocina" : "Enviado"}
        </button>
      </div>
    </div>
  );
};

export default Count;
