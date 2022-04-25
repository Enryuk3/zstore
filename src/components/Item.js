function Item({item}) {
  return (
    item.map(item => <div className="shadow-xl card w-96 bg-base-100" key={item.id} >
      <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
  )}

export default Item
