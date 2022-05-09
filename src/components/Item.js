import { Link } from "react-router-dom"

function Item({producto}) {

  const onAdd = (count) => {
    alert (`Se agregaron ${count} productos al carrito`)
  };
  return (
    <div className="shadow-xl card card-compact w-96 bg-base-100">
      <figure>
        <img src={producto.picUrl} alt={producto.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{producto.title}</h2>
        <div className="inline-block mr-5 align-bottom">
          <span className="text-5xl font-bold leading-none align-baseline">
            ${producto.price}
          </span>
        </div>
        <div className="justify-end card-actions">
          <Link to={`/shoes/${producto.id}`} className="btn btn-primary">
            ver más
          </Link>
        </div>
      </div>
    </div>
  )}

export default Item
