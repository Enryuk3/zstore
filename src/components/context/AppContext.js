import { collection, getFirestore, getDocs } from "firebase/firestore"
import { createContext, useContext, useEffect, useState } from "react"



const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    let firestoreProducts = []
    const getItems = async () => {
      const db = getFirestore();
      const items = await getDocs(collection(db, "items"))
      return items
    }
    getItems()
      .then((res) =>
        res.docs.forEach((doc) => {
          firestoreProducts.push({
            ...doc.data(),
            id: doc.id,
          })
        })
      )
      .then(() => setProducts(firestoreProducts))
  }, [])

  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  )
}
export default AppContextProvider