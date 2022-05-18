import React, { useEffect, useState } from "react";
import AddBtn from "./utilities/AddBtn";
import MinBtn from "./utilities/MinBtn";
import "./Menu.css";

const Quantity = ({ getQuantity, setQuantity, price, getTotalPrice}) => {

  const [cant, setCant] = useState(1);
  const [totalPrice , setTotalPrice] = useState([])

  const sumItems = () => {
    setCant(cant + 1);
    // setQuantity(cant)
  };

  const resItems = () => {
    cant <= 1 ? setCant(1) : setCant(cant - 1);
    // setQuantity(cant)
  };

  useEffect(() => {

    setQuantity(cant)
    setTotalPrice(price*cant)
    console.log(totalPrice)
    // getTotalPrice(cant)
    getTotalPrice(totalPrice)
    
    // setTotalPrice(
    //   (total)=> {
    //     return[...total, cant*price]
    //   }
    // )

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
      {/* <span className="info"> {cant*price} $ </span> */}
    </div>
  );
};

export default Quantity;
