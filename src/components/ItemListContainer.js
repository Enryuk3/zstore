import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

function ItemListContainer() {
  const [category, setCategory] = useState()
  const { categoryId } = useParams()

  useEffect(() => {
    const db = getFirestore()
    
    const q = query(
      collection(db,"items"),
      where("category", "==", categoryId)
    )
    const itemsCollection  = collection(db,"items")

    if (!categoryId) {
      getDocs(itemsCollection).then((res) => {
          setCategory(res.docs.map((doc)=> ({id: doc.id,...doc.data()})))
        });
    } else {
      getDocs(q).then((res) => {
        setCategory(res.docs.map((doc)=> ({id: doc.id,...doc.data()})))
      });
    }
    },[categoryId]);

  
  console.log(category)
  return (
    <div className="w-full">
      <ItemList category={category}/>
    </div>
  )
}
export default ItemListContainer
