import React, { createContext, useState } from "react";

export const editResponseContext = createContext()
export const loggedInResponseContext= createContext()

function DataShare({ children }) {
  const [ editResponse , setEditResponse] = useState(false);
  const [isLoggedIn , setIsLoggedIn] = useState(false)


  return (
    //to access value of the context 
     <editResponseContext.Provider value={{editResponse , setEditResponse }} >
      <loggedInResponseContext.Provider value={{isLoggedIn , setIsLoggedIn}}>
      {children}

      </loggedInResponseContext.Provider>
       </editResponseContext.Provider>
  );
}

export default DataShare;
