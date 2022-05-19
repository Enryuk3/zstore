import { collection, getFirestore, getDocs } from "firebase/firestore"
import { createContext, useContext, useEffect, useState } from "react"



const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const db = getFirestore();
    
    const itemsCollection = collection(db,"items");
    getDocs(itemsCollection).then((resp) => {
      setProducts(resp.docs.map((doc) => ({id: doc.id,...doc.data()})))
    });
  })

  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  )
}
export default AppContextProvider