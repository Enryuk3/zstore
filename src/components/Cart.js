import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";

const Cart = () => {
  const { cart } = useCartContext();
  const { deleteFromCart } = useCartContext()
  const { deleteCart} = useCartContext()

  return (
    <div >
    <h1 className="text-center py-7 text-xl lg:text-3xl font-bold text-black">TU CARRITO</h1>
    
      
      {cart.map((item) => (
        <div key={item.id} className="flex flex-row p-4 items-center w-[300px] lg:w-96 justify-center gap-4 md:max-w-5xlxl mx-auto ">
          <img src={item.picUrl}  className="w-10 md:w-32 lg:w-96 " alt={item.title} />
          <div className="flex flex-col gap-2">
            <p className="badge badge-primary badge-lg">{item.brand}</p>
            <h2 className="text-base md:text-3xl lg:text-5xl font-bold leading-none align-baselinel ">{item.title}</h2>
            <p className="text-base lg:text-2xl"><span className="font-semibold ">Cantidad: </span>{item.quantity}</p>
          </div>
          <p>{item.price}</p>
          <button className="btn btn-error text-white " onClick={()=>deleteFromCart(item)}>
            <FontAwesomeIcon icon={faTrash}/>
          </button>
        </div>
      ))}  
      
      {
      cart.length === 0? (
        <div className="h-[calc(100vh-300px)] grid place-content-center">
          <p className="text-xl lg:text-3xl font-bold py-5 uppercase">Tu carrito está vacío</p>
          <p className="text-base lg:text-lg font-medium mb-4">Una vez que añadas algo a tu carrito, aparecerá aquí. ¿Listo para empezar?</p>
          <div>
           <Link to="/" className="btn bg-indigo-800"> Comenzar</Link>  
          </div>
        </div>
      ) : (
      <>
        <div className="flex flex-col items-center justify-center">
          <p className="text-base font-medium lg:text-2xl mb-5">
            TOTAL({ cart.reduce((acc, item) => acc + item.quantity, 0)} productos)
            <span className="text-bold"> ${ cart.reduce((acc, item) => acc + (item.price*item.quantity), 0)} </span>
          </p>
          <button className="btn" onClick={deleteCart}>
            Vaciar Carrito
          </button>
          <div>
            <Link to="/checkout" className="btn">Checkout</Link>
          </div>
        </div>
      </>
      )
    } 
    </div>
  );
};
export default Cart;
