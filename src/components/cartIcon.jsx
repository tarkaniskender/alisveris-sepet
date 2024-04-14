import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = ({cart}) => {
return(
    <div className="relative">
        <FaShoppingCart className="text-2xl"/>
        <span className="bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full absolute -top-2 -right-4 text-xs"> {cart.length} 
        </span>     
    </div>  
    )
}

export default CartIcon