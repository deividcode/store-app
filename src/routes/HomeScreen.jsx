import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import dataStore from "../services/store.json";
import Header from "./components/Header";
import image3 from "../assets/images/anomaly-WWesmHEgXDs-unsplash.jpg";
console.log(dataStore);
function HomeScreen() {
  return (
    <>    
      <div className="bg-cod-gray-50">
        <div className="container mx-auto h-screen pb-20 grid grid-rows-6">
          <Header style={"row-span-1 grid grid-cols-3 gap-8 justify-items-center items-center"}/>                      
          <div className="row-span-1"></div>
          <div className="row-span-4 grid grid-cols-12 grid-rows-4 grid-flow-col  mt-16">
            <div className="col-span-4 row-span-4 flex flex-col justify-between ">
              <div className="flex flex-col gap-4">
                <h1 className="text-cod-gray-950 text-6xl font-boldPrimary tracking-wide">
                  NEW COLLECTION
                </h1>
                <p className="text-cod-gray-900 font-regularPrimary ">
                  Summer <br /> 2024{" "}
                </p>
              </div>
              <div>
                <Link to="/products" className="flex gap-4 justify-between items-center max-w-60 px-6 py-3 text-cod-gray-950 text-sm text-regularPrimary bg-cod-gray-200">                  
                  Go to Shop <BsArrowRight className="w-5 h-auto fill-cod-gray-950" />                               
                </Link>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-7 row-span-4 flex justify-between">
              <div className="">
                <img className="min-w-52 h-full" src={image3} alt="" />
              </div>
              <div className="">
                <img className="min-w-52 h-full" src={image3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="container mx-auto">
        <div className="grid gap-12 justify-start py-20">
          <div>
            <h2 className="text-5xl font-boldPrimary tracking-wide">
              NEW <br /> THIS WEEK
            </h2>
          </div>
          <div className="flex gap-14 justify-between">

            {dataStore.map((item) => {
              return (
                <div key={item.id} className="grid gap-2 w-64">
                  <img
                    className="w-full h-auto object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="flex gap-10 justify-between items-end">
                    <div>
                      <p className="text-sm text-cod-gray-900"> V-Neek T-Shirt</p>
                      <p className="text-cod-gray-950 font-boldPrimary">
                        Embroidered Seersucker Shirt
                      </p>
                    </div>
                    <p className="text-lg text-cod-gray-950">$50</p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        <div className="grid gap-8 justify-start py-20">
          <div className="">
            <h2 className="text-5xl font-boldPrimary tracking-wide">
              XIV <br /> COLLECTIONS <br /> 23-24
            </h2>
            <div className="flex gap-8 mt-12">
              <p>(ALL)</p>
              <p>Men</p>
              <p>Women</p>
              <p>Kid</p>
            </div>
          </div>
          <div className="flex gap-14 justify-between">

            {dataStore.map((item) => {
              return (
                <div key={item.id} className="grid gap-2 w-64">
                  <img
                    className="w-full h-auto object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="flex gap-10 justify-between items-end">
                    <div>
                      <p className="text-sm text-cod-gray-900"> V-Neek T-Shirt</p>
                      <p className="text-cod-gray-950 font-boldPrimary">
                        Embroidered Seersucker Shirt
                      </p>
                    </div>
                    <p className="text-lg text-cod-gray-950">$50</p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        <div className="grid gap-10 py-20">
          <div className="grid gap-2 justify-items-center text-center">
            <h2 className="text-5xl">OUR APPROACH TO FASHION DESIGN</h2>
            <p className="max-w-2xl text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, repellendus porro corrupti velit, laudantium hic impedit deserunt temporibus incidunt doloremque aut soluta exercitationem odio magnam tenetur? Commodi cupiditate natus error!</p>
          </div>
          <div className="flex gap-2 justify-between">
            {dataStore.map((item) => {              
              
              return(
                <div key={item.id} className="grid gap-2 w-64">
                  <img
                    className="w-full h-auto object-cover"
                    src={item.image}
                    alt={item.name}
                  />                
                </div>
              )
            })}
          </div>

        </div>
      </main>
    </>
  );
}

export default HomeScreen;
