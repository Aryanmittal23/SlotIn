import React, { createContext } from 'react'
import {item_list} from '../assets/assets'

export const StoreContext =createContext(null)

export function StoreContextProvider(props){

  const contextvalue={
    item_list
  }
  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContext