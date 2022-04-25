import { useEffect, useState } from "react"
import Item from "./Item"

function ItemList() {
  const items = [
    {id:1, title:"Adidas", price:300},
    {id:2, title:"Nike", price:250},
    {id:3, title:"Umbro", price:200},
    {id:4, title:"DC", price:150},
    {id:5, title:"Puma", price:120}
  ]
  const [shoes, setShoes] = useState([])

  useEffect(() => {

    const promesa =  new Promise ((resolve, reject) => {
      const rand = Math.random()
      console.log('Random Number', rand)
      setTimeout( () => {
        if(rand >= 0.5){
          resolve(items)
        } else {
          reject('Rechazada')
        }
      }, 2000)
    })

    promesa
      .then (result => {
        console.log('La promesa fue satisfecha', result)
        setShoes(result)
      })
      .catch(err => {
        console.log('La promesa fue rechazada', err)
      })
  }, [])

  return (
    <div className="flex flex-wrap justify-center w-full gap-10 mx-auto">
      <Item item={shoes}/>
    </div>
  )
}

export default ItemList
