import React from 'react'
import productData from './productData'

const ProductItem = ({product, cart, setCart}) => {

    const addToCart = (product)=> {
        setCart([...cart, product])
    };

  

  return (
    <div className='border p-4 m-2 rounded-lg shadow-lg'>
        <img className="w-full h-48 object-cover rounded-t-lg" src="{product.image}" />
        <h2 className="text-xl font-semibold mb-2">
            {product.name}
        </h2>
        <p className=' text-gray-500 my-2'> {product.price} </p>
        <button className="bg-blue-500 text-white px-4 py-[8px] rounded hover:bg-blue-600 w-full" onClick={()=> addToCart(product)}>Sepete Ekle</button>
        </div>
  )
}

export default ProductItem