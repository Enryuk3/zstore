import { useState } from "react";
import { useCartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {

  const { title, brand, price, stock, picUrl, description, category, id } = producto;
  const [terminar, setTerminar] = useState(false);
  const { addToCart } = useCartContext()

  const onAdd = (count) => {
    setTerminar(true);
    addToCart(producto, count);
  };
  
  return (
    
			<div className="hero bg-base-200">
      <div className="flex-col lg:hero-content md:flex-row ">
        <img
          src={picUrl}
          className="max-w-sm md:max-w-md w-full rounded-lg mx-auto shadow-xl"
          alt={`${category}, ${title} de ${brand}`}
        />
        <div className="h-full flex flex-col items-center justify-center gap-3">
          <h1 className="text-xl lg:text-3xl font-bold">{brand}</h1>
          <h2 className="text-3xl lg:text-5xl font-bold">{title}</h2>
          <p className="py-6 max-w-sm">{description}</p>
          <div className="inline-block align-bottom mx-auto justify-center">
            <span className="text-3xl lg:text-5xl font-bold leading-none align-baseline">
              ${price}
            </span>
            <div className="mt-4">
            {terminar ? (
              <Link
                to="/cart"
                className="text-white btn bg-primary btn-block "
              >
                Terminar Compra
              </Link>
            ) : (
              <ItemCount stock={stock} initial={1} onAdd={onAdd} id={id} />
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
