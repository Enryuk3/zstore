import { createContext, useContext } from "react"
import { useLocalStorage } from "../useLocalStorage"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
  //logica

  const [cart, setCart] =  useLocalStorage('carrito', [])

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
  // console.log(cart)

  // Total del carrito
	const cartTotal = () => {
		let totalCart = 0
		cart.forEach (item => totalCart += (item.price*item.quantity))
		return totalCart
	}

  return (
    <CartContext.Provider value={{cart,addToCart,deleteFromCart,deleteCart, setCart, cartTotal}}>
      {children}
    </CartContext.Provider >
  )
}

export default CartContextProvider