import { collection, getDocs, getFirestore} from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

function ItemListContainer() {
  const [category, setCategory] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection  = collection(db,"items")

    getDocs(itemsCollection).then( snapshot => {
      const shoesList = []
      snapshot.docs.forEach ( s =>{
        shoesList.push({id:s.id, ...s.data()})
      })
      if (!categoryId){
        setCategory(shoesList)
      } else {
        setCategory(shoesList.filter((t) => t.category === categoryId))
      }
    });
    },[categoryId]);

  return (
    <div className="w-full">
      <ItemList category={category}/>
    </div>
  )
}
export default ItemListContainer
