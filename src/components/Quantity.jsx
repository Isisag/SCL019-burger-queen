import React, {useEffect, useState} from "react";
import AddBtn from './utilities/AddBtn';
import MinBtn from './utilities/MinBtn';
import './Menu.css';


const Quantity = ({getQuantity}) => {

  const [cant , setCant] = useState(1)

  const sumItems = () => {
    setCant(cant + 1);
  };

  const resItems = () => {
    cant <= 1 ? setCant(1) : setCant(cant - 1);
  };

  useEffect((cant) => {
    getQuantity(cant)
  }, [cant])
  

  return (
    <div className="quantity">
      <button onClick={resItems} className="count-order-btn">
        <MinBtn />
      </button>
      <span className="info"> {cant} </span>
      <button onClick={sumItems} className="count-order-btn">
        <AddBtn />
      </button>
    </div>
  );
};

export default Quantity;
