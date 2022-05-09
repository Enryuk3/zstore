import Item from "./Item";

const ItemList = ({ category }) => {
  return (
    <div className="flex flex-wrap justify-center w-full gap-10 mx-auto">
      {category &&
        category.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))
      }
    </div>
  );
};

export default ItemList;
