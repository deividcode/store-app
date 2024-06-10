import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { StoreContext } from "../../context/GlobalProvider";
import useProducts from "../../hooks/useProducts";

function ItemProduct({dataProduct}) {
  
  const { state, addProduct } = useContext(StoreContext)
  const { isProductAdd } = useProducts()
 
  const handleClick = (idProduct) => {               

    isProductAdd(state?.actualcart?.products, idProduct) 
    ? addProduct(dataProduct)
    : alert("Este producto ya esta agregado")    
    
  }

  return (
    <div className="grid gap-2 hover:cursor-pointer">
      <div>
        <img
          className="w-full h-auto max-h-72 object-fill"
          src={dataProduct.image}
          alt={dataProduct.name}
        />
        <div className="flex justify-center items-center py-2">
          <button onClick={() => handleClick(dataProduct.id)}>
            <BsPlusLg/>
          </button>
        </div>
      </div>
      <div className="flex gap-10 justify-between items-end">
        <div>
          <p className="text-sm text-cod-gray-900 font-lightPrimary my-1">{dataProduct.category}</p>
          <p className="text-cod-gray-950 text-sm font-mediumPrimary tracking-wider">
            {dataProduct.title}
          </p>
        </div>
        <div>
          <p className="text-cod-gray-950 tracking-widest">${dataProduct.price}</p>
        </div>
      </div>
    </div>

  );
}

export default ItemProduct;
