import React from 'react'


function useProducts() {
    

  const isProductAdd = (list, idProduct) => {      
    if(list === undefined) return true      
    return list?.every( item => item.id !== idProduct )  
  }

  return {isProductAdd}
}

export default useProducts