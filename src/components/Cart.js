import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";

const Cart = () => {
  const { cart } = useCartContext();
  const { deleteFromCart } = useCartContext()
  const { deleteCart} = useCartContext()


  console.log(cart);
  return (
    <div className="container mx-auto">
    <h1 className="text-center py-7 text-xl lg:text-3xl font-bold text-black">CARRITO</h1>
    {
      cart.length === 0? (
        <div className="h-[calc(100vh-300px)] grid place-content-center">
          <p className="py-7">No encontramos nada, por ahora...</p>
          <Link to="/" className="btn btn-success rounded-lg"> Empezar a Comprar</Link>
        </div>
      ) : (
      <div className="flex justify-center">
        <button className="btn btn-secondary" onClick={deleteCart}>Vaciar carrito</button>
      </div>)
    }
      
      {cart.map((item) => (
        <div key={item.id} className="flex flex-row p-4 items-center justify-center gap-4">
          <img src={item.picUrl}  className="w-10 md:w-32 lg:w-96" alt={item.title} />
          <div>
            <h2 className="text-base lg:text-4xl">{item.title}</h2>
            <p><span className="font-bold text-cyan-500">Cantidad: </span>{item.quantity}</p>
          </div>
          <button className="btn btn-ghost" onClick={()=>deleteFromCart(item)}>Eliminar</button>
        </div>
      ))}  
    </div>
  );
};
export default Cart;
