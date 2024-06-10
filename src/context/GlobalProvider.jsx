import React from "react";
import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const storedata = {  
  actualcart: {    
  }        
};
/*
{
  id: 10,
  products: [
    {
      name: "Nombre",
      category: "men",
      precio: 100,
      image: "imagen"
    }
  ],
  date_buy: "10/20/40",
  status_buy: false      
}
*/   

export const StoreContext = createContext();

function GlobalProvider({ children }) {

  const [state, dispatch] = useReducer(AppReducer, storedata)
  console.log(state)

  const createCart = (first) => { 

    dispatch({
      type: "CREATE_CART",      
    })

  }

  const addProduct = (product) => { 

    const {id, title, category, price, image} = product

    if(Object.keys(state.actualcart).length === 0 ){
      createCart()
    }   
                     
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id,
        title,
        category,
        price,
        image
      }
    })  
   
  }


  return (
    <StoreContext.Provider
      value={{
        state,
        addProduct
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default GlobalProvider;
