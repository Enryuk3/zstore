import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";

const Cart = () => {
  const { cart } = useCartContext();
  const { deleteFromCart } = useCartContext()
  const { deleteCart, cartTotal } = useCartContext()

  return (
    <>
    {/* Carrito = vacío */}
    {cart.length === 0 ? (
      <div className=" min-h-[300px] grid place-content-center my-6 bg-white w-11/12 md:w-3/4 lg:w-3/4 mx-auto pb-7">
        <div className="mx-5 text-center">
          <img
            className="my-6 rounded" alt=""
            src="https://p4.wallpaperbetter.com/wallpaper/482/792/849/abstract-sport-background-nike-wallpaper-preview.jpg"
          ></img>
          <p className="font-bold">
            ¡Tu carrito está vacío! <br />
            Una vez que añadas algo a tu carrito, aparecerá aquí. ¿Listo para empezar?
          </p>
          <Link
            to="/"
            className="btn mt-5 px-3 py-2 text-white bg-z-dark-blue hover:text-z-dark-blue hover:bg-white text-xs font-bold rounded transition-all duration-500"
          >
            Ver productos
          </Link>
        </div>
      </div>
    ) : (
      /* Carrito content */
      <div className="bg-white my-6 w-full mx-auto">
        <h2 className="self-center py-8 text-center text-z-dark-blue underline text-xl md:text-2xl lg:text-2xl font-bold">
          Carrito de compras
        </h2>
        <table className="mx-auto w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="items-center text-z-dark-blue text-xs md:text-lg lg:text-lg">
                Producto
              </th>
              <th className="items-center text-z-dark-blue text-xs md:text-lg lg:text-lg">
                Precio
              </th>
              <th className="items-center text-z-dark-blue text-xs md:text-lg lg:text-lg">
                Cantidad
              </th>
              <th className="items-center text-z-dark-blue text-xs md:text-lg lg:text-lg">
                Subtotal
              </th>
              <th className="items-center text-z-dark-blue text-xs md:text-lg lg:text-lg">
                Eliminar
              </th>
            </tr>
          </thead>
          {cart.map((item) => (
            <thead key={item.id}>
              <tr className="border-b border-gray-200">
                <th className="flex flex-col items-center ">
                  <img
                    className="h-36 w-36"
                    src={item.picUrl}
                    alt="Imagen de producto"
                  />
                  <div className="flex flex-col ">
                    <p className="text-z-dark-blue text-xs md:text-lg lg:text-lg  ">
                      {item.title}
                    </p>
                  </div>
                </th>
                <th className="text-z-dark-blue text-sm md:text-lg lg:text-lg">
                  ${item.price}
                </th>
                <th className="text-z-dark-blue text-sm md:text-lg lg:text-lg">
                  {item.quantity}
                </th>
                <th className="text-z-dark-blue text-sm md:text-lg lg:text-lg">
                  ${item.quantity * item.price}
                </th>
                <th>
                  <button
                    className="text-z-dark-blue text-sm md:text-lg lg:text-lg"
                    onClick={() => deleteFromCart(item)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </th>
              </tr>
            </thead>
          ))}
        </table>
        <div className="flex flex-col justify-between w-4/5 mx-auto mt-2 mb-2 md:flex-row">
          <button
            className="btn capitalize my-3 text-white bg-z-dark-blue hover:text-whit hover:bg-z-pink text-base md:text-xl lg:text-xl font-bold rounded transition-all duration-500 w-full md:w-1/3"
            onClick={() => deleteCart()}
          >
            Vaciar Carrito
          </button>

          <div className="flex flex-col self-start w-full md:w-2/5">
            <div className="flex flex-row justify-between my-2 text-sm md:text-lg lg:text-lg font-bold ">
              <p>Cantidad de productos:</p>
              <p>{cart.reduce((acc, ite) => acc + ite.quantity, 0)}</p>
            </div>
            <div className="flex flex-row justify-between my-2 text-base md:text-xl lg:text-xl font-bold ">
              <p className="underline">Total:</p>
              <p>${cartTotal()}</p>
            </div>
            <div className="flex flex-row justify-between my-2 text-sm md:text-lg lg:text-lg font-bold">
              <p>¡Envío gratis!</p>
            </div>
            <Link
              to="/checkout"
              className="btn capitalize mt-3 mb-6 text-white bg-z-dark-blue hover:text-z-dark-blue hover:bg-white text-base md:text-xl lg:text-xl font-bold rounded transition-all duration-500"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    )}
  </>
  );
};
export default Cart;
