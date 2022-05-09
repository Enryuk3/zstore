import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../data/shoesData"
import ItemList from "./ItemList"

function ItemListContainer() {
  const [category, setCategory] = useState()
  const { categoryId } = useParams()

  useEffect(() => {
    if (!categoryId) {
      getItem().then((resp) => setCategory(resp))
    } else {
      getItem().then((resp) =>
        setCategory(resp.filter((product) => product.category === categoryId))
      )
    }

  },[categoryId])
  
  return (
    <div className="w-full">
      <ItemList category={category}/>
    </div>
  )
}
export default ItemListContainer
