import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { shoesData } from "../data/shoesData";
import Item from "./Item";

function ItemList() {
  const { categoryId } = useParams();

  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    getFilteredList();
    getShoes();
  }, []);

  const getShoes = () => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(shoesData);
      }, 2000);
    });

    promesa.then((data) => {
      setShoes(data);
    });
  };

  const getFilteredList = () => {
    if (!categoryId) {
      return shoes;
    }
    return shoesData.filter((s) => s.category === categoryId);
  }
  let filteredList = useMemo(getFilteredList, [categoryId, shoes]);

  return (
    <div className="flex flex-wrap justify-center w-full gap-10 mx-auto">
      {filteredList.map((s) => (<Item key={s.id} item={s} />))}
    </div>
  );
}

export default ItemList;
