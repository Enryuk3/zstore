import { useState } from "react";
import { useAppContext } from "./context/AppContext";
import { useCartContext } from "./context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({ stock, initial, onAdd, id }) => {
  const [count, setCount] = useState(initial);

  const { addToCart } = useCartContext()
  const { products } = useAppContext()

  const resHandler = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  const addHandler = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleClick = (id, cantidad) => {
    const findProduct = products.find((producto) => producto.id === id)

    if(!findProduct){
      alert("Error en la base de datos")
      return
    }

    addToCart(findProduct, cantidad)
    onAdd(count)
  }

  return (
    <div className="flex gap-4">
				<div className="flex flex-row">
					<button className="btn " onClick={resHandler}>
            <FontAwesomeIcon icon={faMinus} />
					</button>
					<label className="flex items-center justify-center px-10 text-xl text-black ">{count}</label>
					<button className="btn " onClick={addHandler}>
          <FontAwesomeIcon icon={faPlus} />
					</button>
				</div>
				<div>
					<button
						className="text-white btn bg-primary btn-block "
						onClick={() => handleClick(id, count)}
					>
						Agregar al Carrito
					</button>
				</div>
			</div>
  );
};

export default ItemCount;
