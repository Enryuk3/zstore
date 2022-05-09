import { createContext, useContext, useEffect, useState } from "react"
import { getItem } from "../../data/shoesData"


const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    getItem().then((resp) => setProducts(resp))
  })

  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  )
}
export default AppContextProvider