import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppContext } from "./context/AppContext"
import ItemList from "./ItemList"

function ItemListContainer() {
  const { products } = useAppContext()

  const [category, setCategory] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {

    !categoryId
      ? setCategory(products)
      : setCategory(products.filter((product) => product.category === categoryId))

  }, [categoryId, products]);

  return (
    <div className="w-full">
      <ItemList category={category}/>
    </div>
  )
}
export default ItemListContainer
