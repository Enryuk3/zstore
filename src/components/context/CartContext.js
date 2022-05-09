import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
  //logica
  const [cart, setCart] =  useState([])

  //validar si está el item en el carrito
  const isInCart = (id) => cart.find((producto) =>producto.id === id)

  //Agregar item al Carrito
  const addToCart = (producto, cantidad) => {
    const newCart = [...cart]

    const productoIsInCart = isInCart(producto.id)

    if(productoIsInCart) {
      newCart[newCart.findIndex((prod) => prod.id === productoIsInCart.id)].quantity += cantidad

      setCart(newCart)
      return
    }

    producto.quantity = cantidad
    setCart([...newCart, producto])
  }

  const deleteFromCart = (producto) =>{
    const newCart = [...cart]

    const productIsInCart = isInCart(producto.id)

    if(!productIsInCart){
      return
    }

    const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)

    setCart(deleteProduct)
  }
  
  const deleteCart = () => setCart([])
  console.log(cart)

  return (
    <CartContext.Provider value={{cart,addToCart,deleteFromCart,deleteCart, setCart}}>
      {children}
    </CartContext.Provider >
  )
}

export default CartContextProvider