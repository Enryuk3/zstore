import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  const { title, brand, price, stock, picUrl, description, category, id } = producto;
  const [terminar, setTerminar] = useState(false);

  const onAdd = (count) => {
    setTerminar(true);
    console.log(count);
  };

  return (
    
			<div className="hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row">
        <img
          src={picUrl}
          className="max-w-sm rounded-lg shadow-2xl"
          alt={`${category}, ${title} de ${brand}`}
        />
        <div>
          <h1 className="text-3xl font-bold">{brand}</h1>
          <h2 className="text-5xl font-bold">{title}</h2>
          <p className="py-6">{description}</p>
          <div className="inline-block mr-5 align-bottom">
            <span className="text-5xl font-bold leading-none align-baseline">
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
