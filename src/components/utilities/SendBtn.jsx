import React,{useState} from "react";
import '../Menu.css';


const SendBtn = (type) => {

    const [isToggleOn, setIsToggleOn] = useState(true)

    const handleClick = () =>{
        setIsToggleOn(!isToggleOn)
    }

  return( <div>
      <button className={isToggleOn ? 'send-order-button' : 'send-order-button send-order-button-active' }
      onClick={handleClick}>
           {isToggleOn ? 'Enviar a Cocina' : 'Enviado'}
      </button>
      {/* <button onClick={handleClick}>{isToggleOn ? 'ON' : 'OFF'}</button> */}
  </div>
  );
};

export default SendBtn;
