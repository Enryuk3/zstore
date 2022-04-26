import { useState } from "react"

const ItemCount = ({stock, initial}) => {
  const [count, setCount] = useState(initial)
  
  const resHandler = () => {
    if(count > initial){
      setCount(count - 1)
    }
  }
  const addHandler = () => {
    if (count < stock){
      setCount(count + 1)
    }
  }

  return (
    <div>
      <div className="flex p-4 mt-2 bg-gray-200 justify-evenly rounded-xl">
        <button onClick={resHandler}>-</button>
        <span>{count}</span>
        <button onClick={addHandler}>+</button>
      </div>
    </div>
  )
}

export default ItemCount