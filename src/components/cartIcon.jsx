import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
return(
    <div className="relative">
        <FaShoppingCart className="text-2xl"/>
        <span className="bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full absolute -top-2 -right-4 text-xs"> 0 
        </span>     
    </div>  
    )
}

export default CartIcon