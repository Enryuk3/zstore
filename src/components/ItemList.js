import { useEffect, useState } from "react"
import { shoesData } from "../data/shoesData"
import Item from "./Item"

function ItemList() {
  
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
      {shoes.map( m => <Item  key={m.id} item={m} />)}
    </div>
  )
}

export default ItemList
