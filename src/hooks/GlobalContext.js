import React, { createContext } from 'react'

export const GlobalContext = createContext()
export const GlobalContextProvider = (props) => {
  return (
    
    <GlobalContext.Provider value="this info is global context">
        {props.children}
    </GlobalContext.Provider>
  )
}
