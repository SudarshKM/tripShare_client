import React, { createContext, useState } from "react";

export const editResponseContext = createContext()

function DataShare({ children }) {
  const [ editResponse , setEditResponse] = useState(false);


  return (
    //to access value of the context 
     <editResponseContext.Provider value={{editResponse , setEditResponse }} >
        {children}
       </editResponseContext.Provider>
  );
}

export default DataShare;
