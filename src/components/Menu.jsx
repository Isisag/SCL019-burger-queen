import React, { useEffect, useState } from 'react'

const Menu = () => {

    const [menu, setMenu] = useState([])
    const callJson = () => {
        fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
        .then((data) =>{
            console.log(data.breakfast)
            setMenu(data.breakfast)
        })
        .catch(error =>{
            console.log(error)
        })
    }
   
    useEffect(() => {
        // fetch('menu.json')
        // .then(res =>{
        //     res.json()
        // })
        // .then(data=>{
        //     console.log(data[0])
        //     setMenu(data)
        // })
        // .catch(error =>{
        //     console.log(error)
        // })
        callJson();
    },[])
    

  return (
    <div>
        Menu
        {/* <ul>
        {
            menu.map((item)=>{
                <li>{item.price}</li>
            })
        }
        </ul> */}

    </div>
  )
}

export default Menu