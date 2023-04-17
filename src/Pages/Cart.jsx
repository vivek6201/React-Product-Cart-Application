import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartProduct from '../Components/CartProduct';

export const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  const [totalPrice,setTotalPrice] = useState(0);

  const calcTotalPrice = () =>{
    setTotalPrice(cart.reduce((acc,curr) => acc + curr.price,0));
  }

  useEffect(()=>{
    calcTotalPrice();
  },[cart])

  return (
    <div className="pt-10 pb-20 h-full w-full">
      {cart.length === 0 ? (
        <div className="flex w-11/12 max-w-[1080px] items-center justify-center flex-col mx-auto gap-y-4 -z-20">
          <p>Cart Empty</p>
          <NavLink to={"/"}>
            <button className="py-2 px-5 font-bold bg-green-400 rounded-lg text-white">
              Explore
            </button>
          </NavLink>
        </div>
      ) : (
        <div className="max-w-[1080px] w-11/12 mx-auto flex md:flex-row flex-col gap-5 h-full items-center md:items-start">
          <div className="w-11/12 md:w-7/12 flex flex-col gap-y-5">
            {
              cart.map((product) =>{
                return (
                  <CartProduct product = {product} key={product.id} />
                )
              })
            }
          </div>

          <div className="w-11/12 md:w-5/12 py-5 px-10 h-full flex flex-col gap-y-4">
            <h1 className="font-bold text-4xl">Summary</h1>
            <p>Total Item : {cart.length}</p>
            <div className="mt-20 flex flex-col gap-y-3 ">
              <p>Total Price : $ {Math.round(totalPrice)}</p>
              <button className="w-full py-3 rounded-lg font-bold text-white bg-green-400">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
