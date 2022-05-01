import { useEffect, useState } from "react"
import { shoesData } from "../data/shoesData"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [shoes, setShoes] = useState([])

  useEffect(() => {
    getShoes()
  }, [])

  const getShoes = () => {
    const promesa =  new Promise ((resolve, reject) => {
      setTimeout( () => {
         resolve(shoesData)
      }, 2000)
    })

    promesa.then (data => {
        setShoes(data)
    })
  }

  return (
    <div className="flex flex-wrap justify-center w-full gap-10 mx-auto">
      <ItemDetail />
    </div>
  )
}
export default ItemDetailContainer