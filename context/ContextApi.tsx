'use client'
import { createContext, useContext, useState } from "react";

export interface StateContextType  {
  category: string;
  categoryManagement: (value: string) => void;
};

export const StateContext = createContext<StateContextType|undefined >(undefined);

export default function ContextProvider({children}:{children : React.ReactNode}){
     const [category,setCategory] = useState('')
     
     const categoryManagement = (e:string)=>  {
           return setCategory(e)
        
     } 

    const contextInfo = {
            categoryManagement,
            category
    }
    return <StateContext.Provider value={contextInfo}>{children}</StateContext.Provider>
}

export function useCategory() {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useCategory must be used inside ContextProvider");
  }

  return context;
}