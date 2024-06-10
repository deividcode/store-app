import React from "react";
import { useContext } from "react";
import { BsTriangleHalf, BsArrowRight, BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/GlobalProvider";

function Header({style}) {
  
  const {state:{actualcart} } = useContext(StoreContext)
  console.log(actualcart)
  return (
    <header className={style}>
      <nav className="flex gap-10 justify-self-start text-cod-gray-950 text-sm font-regularPrimary">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <a href="#">New</a>
      </nav>
      <div>
        <BsTriangleHalf className="w-6 h-auto" />
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex items-center">
          <button className="px-4 py-3 text-sm tracking-wider text-cod-gray-50 bg-cod-gray-950 rounded-full">Cart</button>
          <button className="relative p-3 border-4 border-cod-gray-950 rounded-full">
            <BsHandbag/>
            <p className="absolute top-0 right-0 px-1.5 py-0.5 h-fit text-cod-gray-50 text-xs rounded-full bg-red-500">
              {actualcart?.products?.length ?? 0}
            </p>
          </button>
        </div>
        <div>hola</div>
      </div>
    </header>
  );
}

export default Header;
