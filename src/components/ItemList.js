import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { shoesData } from "../data/shoesData";
import Item from "./Item";

function ItemList() {
  const { categoryId } = useParams();

  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    getShoes();
  }, [categoryId]);

  const getShoes = () => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(shoesData);
      }, 2000);
    });

    promesa.then((shoesPromise) => {
      if (!categoryId) {
        setShoes(shoesPromise)
      } else {
        setShoes(shoesPromise.filter((s) => s.category === categoryId));
      }
    });
  };

  return (
    <div className="flex flex-wrap justify-center w-full gap-10 mx-auto">   
    {
      shoes.length > 0
      ?shoes.map((s) => (<Item key={s.id} item={s} />))
      :<div className="grid w-full place-content-center h-96">Productos disponibles en un instante, espere por favor...</div>                    
    }
    </div>
  );
}

export default ItemList;
