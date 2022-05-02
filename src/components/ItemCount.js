import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

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

  return (
    <div>
      <div className="flex p-4 mt-2 bg-gray-200 justify-evenly rounded-xl">
        <button onClick={resHandler}>-</button>
        <span>{count}</span>
        <button onClick={addHandler}>+</button>
      </div>
      <div className="justify-end card-actions">
        <button className="btn btn-primary" onClick={()=>onAdd(count)}>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
