import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../data/shoesData"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const { shoesId } =  useParams()

  useEffect(() => {
		if (shoesId === undefined) {
			getItem().then((resp) => setProduct(resp))
		} else {
			getItem().then((resp) => {
        let item = resp.find(e => e.id === Number(shoesId))
        setProduct(item)
      })
      
		}
	}, [shoesId]) 

  return (
    <div className="container h-screen max-w-4xl mx-auto my-8">
      <ItemDetail producto={product}/>
    </div>
  )
}
export default ItemDetailContainer