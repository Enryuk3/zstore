import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { useCartContext } from "./context/CartContext"

const CartOrder = () => {
  const { cart, cartTotal } = useCartContext()
  
  const saveOrder = async () => {
		const buyer = {
			name: "Puma Carranza",
			phone: "+51432674528",
			email: "puma28@gmail.com"
		}
		const cartFiltered = cart.map(({ id, title }) => ({ id, title }))
		const orderToSave = {
			buyer: buyer,
			items: cartFiltered,
			total: cartTotal()
		}
		console.log(orderToSave);
		const db = getFirestore()
		const ordersCollection = collection(db, "orders")

		const response = await addDoc(ordersCollection, orderToSave)
		console.log(response.id);
	}
  const updateOrder = async () => {
    const docId ='edeCKyboKbBF1GwxUCQg'
    const db = getFirestore()
    const orderDoc = doc(db,'orders', docId)
    const response = await updateDoc(orderDoc, {total:2000})
    console.log(response.id)
  }

  const batchUpdate = () => {
		const db = getFirestore();
		const batch = writeBatch(db)

		const doc1 = doc(db, "orders", "2Kn9AmCzTgjsTSi8OdS5")
		batch.update (doc1, {total:2500})

		const doc2 = doc(db, "orders", "edeCKyboKbBF1GwxUCQg")
		batch.update (doc2, {total:2500})

		batch.commit()
	}

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
      <button className="btn btn-primary" onClick={saveOrder}>Enviar Datos</button>
      <button className="btn ml-2 bg-green-500 hover:bg-green-600" onClick={updateOrder}>actualizar datos</button>
      <button className="btn ml-2 bg-red-600 hover:text-black hover:bg-white" onClick={batchUpdate}>Batch</button>
    </div>
  )
}
export default CartOrder