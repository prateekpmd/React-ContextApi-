import React, { useState, createContext } from 'react'


export const CartHolder =createContext()

const Context = ({children}) => {
     const [cart, setCart] = useState([]);
  return (
    <CartHolder.Provider value={{cart,setCart}} >
        {children}
    </CartHolder.Provider>
  )
}

export default Context;