import React, { createContext, useState } from "react";

export const editResponseContext = createContext()
export const loginContex= createContext()

function DataShare({ children }) {
  const [ editResponse , setEditResponse] = useState(false);
  const [isLoggedin , setIsLoggedIn] = useState(false)


  return (
    //to access value of the context 
     <editResponseContext.Provider value={{editResponse , setEditResponse }} >
      <loginContex.Provider value={{isLoggedin , setIsLoggedIn}}>
      {children}

      </loginContex.Provider>
       </editResponseContext.Provider>
  );
}

export default DataShare;
