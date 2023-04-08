import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartProduct = ({ product }) => {

  const dispatch = useDispatch();
  const [itemCount,setItemCount] = useState(1);

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Product Removed from cart");
  }

  return (
    <div className="flex w-full py-3 px-5 rounded-xl border h-[350px]">
      <div className="flex items-center h-full justify-center w-4/12">
        <img src={product.image} className="w-8/12 object-contain aspect-square"/>
      </div>
      <div className="p-5 flex flex-col justify-between w-8/12 gap-y-3">
        <p className="text-xl font-bold">{product.title}</p>
        <p className="opacity-70">{product.description.substring(0,200)}</p>
        <p className="font-bold text-green-400">${product.price}</p>

        <div className="w-full flex justify-between items-center">
          <label className="flex gap-x-4">
            <p>Item Count</p>
            <select name="itemCount" className="w-14 text-center" onChange={(e) => setItemCount(e.target.value)} value={itemCount}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          <button className="rounded-full bg-green-600 text-white py-2 px-4" onClick={removeFromCart}>Remove From Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
