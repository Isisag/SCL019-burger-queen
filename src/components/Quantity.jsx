import React, { useEffect, useState } from "react";
import AddBtn from "./utilities/AddBtn";
import MinBtn from "./utilities/MinBtn";
import "./Menu.css";

const Quantity = ({ getQuantity, setQuantity, price, getTotalPrice, quantity}) => {

  const [cant, setCant] = useState(1);
  const [totalPrice , setTotalPrice] = useState([])

  const sumItems = () => {
    setCant(cant + 1);
  };

  const resItems = () => {
    cant <= 1 ? setCant(1) : setCant(cant - 1);
  };

  useEffect(() => {

    // setQuantity(cant)
    setTotalPrice(price*cant)
    console.log(totalPrice)
    // getTotalPrice(cant)
    getTotalPrice(totalPrice)
    // getQuantity(cant)

    const total = [];
    // setQuantity([...total, cant])
    setQuantity(cant)
    console.log(quantity)

  }, [cant]);

  return (
    <div className="quantity">
      <button onClick={() => resItems()} className="count-order-btn">
        <MinBtn />
      </button>
      <span className="info"> {cant} </span>
      <button onClick={() => sumItems()} className="count-order-btn">
        <AddBtn />
      </button>
      <span className="info">{totalPrice}</span>
      <span className="info">$</span>
    </div>
  );
};

export default Quantity;
