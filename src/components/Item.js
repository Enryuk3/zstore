import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

function Item({item}) {
  const {id, title, price, description, stock }  = item

  const onAdd = (count) => {
    alert (`Se agregaron ${count} productos al carrito`)
  };
  return (
    <div className="shadow-xl card w-96 bg-base-100">
      <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt={title} /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Si un perro muerde zapatos, ¿de quién escoge los zapatos?</p>
        <div className="justify-start card-actions">
          <p className="text-lg font-semibold"> Precio: {price}</p>
        </div>
        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        <div className="justify-end card-actions">
          <Link to={`/shoes/${id}`} className="btn btn-secondary">ver detalle</Link>
        </div>
      </div>
    </div>
  )}

export default Item
