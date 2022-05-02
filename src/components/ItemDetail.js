import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shoesData } from "../data/shoesData";
import ItemCount from "./ItemCount";

const ItemDetail = () => {
  const { shoesId } = useParams();
  const [shoes, setShoes] = useState({});

  const onAdd = (count) => {
    alert (`Se agregaron ${count} productos al carrito`)
  };
  
  useEffect(() => {
    setShoes(shoesData.find((s) => s.id == shoesId));
  }, [shoesId]);

  
  return (
    <div className="shadow-xl card card-side bg-base-100">
      <figure>
        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Imagen de shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{shoes.title}</h2>
        <h4>{shoes.price}</h4>
        <p>{shoes.description}</p>
        <ItemCount stock={shoes.stock} initial={1} onAdd={onAdd}/>
      </div>
    </div>
  );
};
export default ItemDetail;
