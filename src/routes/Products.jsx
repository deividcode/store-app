import React from "react";
import Header from "./components/Header";
import Accordion from "../components/ui/Accordion";
import dataStore from "../services/store.json";
import ItemProduct from "../components/ui/ItemProduct";
import useApi from "../services/useApi";
import { StoreContext } from "../context/GlobalProvider";
import { useContext } from "react";

function Products() {

  /*const { data, isLoading, error } = useApi(
    "https://fakestoreapi.com/products?limit=3"
  );*/
  
  const hola = useContext(StoreContext)

  return (
    <div>
      <div className="container mx-auto h-screen pb-20 grid grid-rows-6">
        <Header
          style={
            "row-span-1 grid grid-cols-3 gap-8 justify-items-center items-center"
          }
        />
        <main className="row-span-5 grid grid-cols-12 grid-rows-6 grid-flow-col mt-6">
          <div className="row-span-2 col-span-2"></div>
          <aside className="row-span-4 col-span-2 flex flex-col">
            <div>
              <p className="text-lg font-bold tracking-widest">Filters</p>
            </div>
            <div className="flex flex-col">
              <Accordion title="Availability" status={true}>
                <label
                  className="flex gap-3 text-sm tracking-widest"
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="availability"
                    id="availability"
                  />
                  Availability
                  <span>
                    (
                    <span className="text-sky-800 font-mediumPrimary">
                      {dataStore.length}
                    </span>
                    )
                  </span>
                </label>
                <label
                  className="flex gap-3 text-sm tracking-widest"
                  htmlFor=""
                >
                  <input type="checkbox" name="outofstack" id="outofstack" />
                  Out Of Stack
                </label>
              </Accordion>
              <Accordion title="Category">
                <label
                  className="flex gap-3 text-sm tracking-widest"
                  htmlFor=""
                >
                  <input type="checkbox" name="electronics" id="electronics" />
                  Electronics                  
                </label>
                <label
                  className="flex gap-3 text-sm tracking-widest"
                  htmlFor=""
                >
                  <input type="checkbox" name="jewelery" id="jewelery" />
                  Jewelery
                </label>
                <label
                  className="flex gap-3 text-sm tracking-widest"
                  htmlFor=""
                >
                  <input type="checkbox" name="mensclothing" id="mensclothing" />
                  Mens clothing                  
                </label>
                <label
                  className="flex gap-3 text-sm tracking-widest"
                  htmlFor=""
                >
                  <input type="checkbox" name="womensclothing" id="womensclothing" />
                  Women Clothing
                </label>
              </Accordion>
              <Accordion title="Colors">
                <label
                  className="flex gap-3 text-sm tracking-widest"
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="availability"
                    id="availability"
                  />
                  Availability
                </label>
                <label
                  className="flex gap-3 text-sm tracking-widest"
                  htmlFor=""
                >
                  <input type="checkbox" name="outofstack" id="outofstack" />
                  Out Of Stack
                </label>
              </Accordion>
              <Accordion title="Price Range">
                <label
                  className="flex gap-3 text-sm tracking-widest"
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="availability"
                    id="availability"
                  />
                  Availability
                </label>
                <label
                  className="flex gap-3 text-sm tracking-widest"
                  htmlFor=""
                >
                  <input type="checkbox" name="outofstack" id="outofstack" />
                  Out Of Stack
                </label>
              </Accordion>
            </div>
          </aside>
          <div className="row-span-6 col-span-1"></div>
          <div className="row-span-2 col-span-9">
            <div>
              <p className="text-sm tracking-wide">
                <span className="font-regularPrimary">Home</span>
                <span className="px-1">/</span>
                <span className="font-boldPrimary">Products</span>
              </p>
              <h2 className="text-2xl my-2 tracking-wide">PRODUCTS</h2>
            </div>
            <form action="">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="w-full max-w-72 placeholder:text-cod-gray-700 text-sm tracking-widest px-4 py-3.5 bg-[#d9d9d9]"
              />
            </form>
          </div>
          <div className="row-span-4 col-span-9 pb-12">
            <div className="grid gap-16 grid-cols-auto-fill-250 pb-20">
              {dataStore.map((item) => {
                return <ItemProduct key={item.id} dataProduct={item} />;
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Products;
