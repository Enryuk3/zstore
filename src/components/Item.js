import ItemCount from "./ItemCount"

function Item({item}) {
  const {title, price}  = item
  return (
    <div className="shadow-xl card w-96 bg-base-100">
      <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt={title} /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <ItemCount stock={10} initial={1}/>
       
        <div className="justify-start card-actions">
          <p className="text-lg font-semibold"> Precio: {price}</p>
        </div>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  )}

export default Item
