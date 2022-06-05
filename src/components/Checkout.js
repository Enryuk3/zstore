import { ArrowLeftIcon } from "@heroicons/react/solid"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "./context/CartContext"

const Checkout = () => {

	//context del carrito
  const { cart, deleteCart,cartTotal } = useCartContext()

	// Use states que permiten obtener el id de la compra, mostrar un modal final y obtener los datos del cliente
	const [idCompra, setIdCompra] = useState("")
	const [ showModal, setShowModal ] = useState()
	const [ buyer, setBuyer ] = useState({
		name: "",
		surname: "",
		telephone: "",
		email: "",
	})

	//Expresiones regulares para email y teléfono
	const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
	const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

  // Obtener información acerca de la fecha en que se realizó la compra
	const orderDate = new Date().toLocaleDateString()

	//Obtener datos del cliente 
	const handleSubmitChange = (e) =>{
		setBuyer({ ...buyer, [e.target.name]: e.target.value })
		console.log(buyer)
	}

	//Generacion de la orden
  const saveOrder = async () => {
		const order = {
			buyer,
			items: cart,
			price: cartTotal(),
			date: orderDate
		}
		const db = getFirestore()
		const addOrder = async (order) => {
			const docSnap = await addDoc(collection(db, "orders"), order)
			return docSnap.id
		}
		
		addOrder(order).then(data => {
			setIdCompra(data)
		})
		// const cartFiltered = cart.map(({ id, title }) => ({ id, title }))
		// const orderToSave = {
		// 	buyer: buyer,
		// 	items: cartFiltered,
		// 	total: cartTotal()
		// }
		// console.log(orderToSave);
	}

	

  return (
		<>
			<div className="flex justify-center items-center mx-auto xl:max-w-7xl  xl:mx-auto">
				<div className="flex w-full flex-col justify-center items-center">
					{/* Título */}
					<h1 className="font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase self-start mt-6 mb-6">
						Checkout
					</h1>
					{/* Información de la compra */}
					<div className="flex w-full flex-col lg:flex-row justify-start items-start">

						{/* Resúmen */}
						<div className="flex flex-col self-start w-full md:w-1/2 mr-6">
							<h2 className="font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase">Resúmen</h2>
							<div className="flex flex-col border border-gray-200 p-4 mt-6">
								<div className="flex flex-row justify-between font-light text-sm text-gray-600 tracking-wide leading-normal">
									<p>Cantidad de items:</p>
									<p>{cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
								</div>
								<div className="flex flex-row justify-between font-light text-sm text-gray-600 tracking-wide leading-normal">
									<p>Gastos de envío:</p>
									<p>¡Envío gratis!</p>
								</div>
								<div className="flex flex-row justify-between font-semibold mt-10 text-xs text-gray-700 tracking-wider leading-loose uppercase">
									<p>Total:</p>
									<p>${cartTotal()}</p>
								</div>
							</div>
							<Link to='/cart' className="font-light text-sm text-gray-600 tracking-wide leading-normal flex flex-row items-center mt-3 lowercase">
								<ArrowLeftIcon className="h-4 w-4 mr-1" />
								Volver al carrito
							</Link>
						</div>
						{/* <button className="btn ml-2 bg-green-500 hover:bg-green-600" onClick={updateOrder}>actualizar datos</button>
				<button className="btn ml-2 bg-red-600 hover:text-black hover:bg-white" onClick={batchUpdate}>Batch</button> */}

						{/* Detalle de facturación */}
						<div className="flex flex-col justify-start items-start w-full mt-6 lg:mt-0 mb-3">

							{/* Formulario */}
							<form className="space-y-6">
								<h2 className="font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase">Detalles de facturación</h2>
								<input
									className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full font-light text-sm text-gray-600 tracking-wide leading-normal"
									id="name"
									type="text"
									name="name"
									required
									onChange={handleSubmitChange}
									placeholder="Nombre"
								/>
								<input
									className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full font-light text-sm text-gray-600 tracking-wide leading-normal"
									id="surname"
									type="text"
									name="surname"
									required
									onChange={handleSubmitChange}
									placeholder="Apellido"
								/>
								<input
									className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full font-light text-sm text-gray-600 tracking-wide leading-normal"
									id="telephone"
									type="tel"
									name="telephone"
									required
									onChange={handleSubmitChange}
									placeholder="Teléfono (insertar como mínimo 7 dígitos)"
								/>
								<input
									className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full font-light text-sm text-gray-600 tracking-wide leading-normal"
									id="email"
									type="email"
									name="email"
									required
									onChange={handleSubmitChange}
									placeholder="E-mail"
								/>
								<input
									className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full font-light text-sm text-gray-600 tracking-wide leading-normal"
									id="emailConfirm"
									type="email"
									name="emailConfirm"
									required
									onChange={handleSubmitChange}
									placeholder="Confirmar e-mail"
								/>
							</form>
							{/* Si se completan todos los inputs correctamente, se habilita el botón para proceder con el pago */}
							{buyer.name && buyer.surname && buyer.telephone && (buyer.email === buyer.emailConfirm) && telephoneRegex.test(buyer.telephone) && emailRegex.test(buyer.email, buyer.emailConfirm)
								? (
									// Botón habilitado
									<input
										onClick={() => { saveOrder(); setShowModal(true) }}
										className="font-medium text-xxs tracking-wider leading-normal uppercase select-none focus:outline-none text-white bg-gray-700 focus:ring-transparent w-full text-center py-3 cursor-pointer mt-6"
										type="submit"
										value="Proceder al pago"
									/>
								) : (
									// Botón deshabilitado
									<input
										className="font-medium text-xxs tracking-wider leading-normal uppercase select-none focus:outline-none text-white bg-gray-400 focus:ring-transparent w-full text-center py-3 mt-6"
										type="submit"
										value="Proceder al pago"
										disabled
									/>
								)
							}
						</div>
					</div>
				</div>
			</div>
			{/* Contenedor modal final */}
			<div className={`${showModal ? "flex" : "hidden"} inset-0 fixed w-full h-full bg-gray-800`}>
				<div className="container mx-auto justify-center items-center px-4 md:px-10 py-20 place-self-center">
					<div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
						<h2 className="text-center md:w-9/12 lg:w-7/12 font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase">¡Muchas gracias por tu compra {(buyer.name).toUpperCase()}!</h2>
						<h2 className="text-center md:w-9/12 lg:w-7/12  ">¡Muchas gracias por tu compra {(buyer.name).toUpperCase()}!</h2>
						<p className="mt-6 text-center md:w-9/12 lg:w-7/12 font-light text-sm text-gray-600 tracking-wide leading-normal" >Te enviamos un mail a {(buyer.email).toLowerCase()} con tu orden de compra ID: {idCompra}. Esperamos que hayas tenido una agradable experiencia en ZSTORE ¡Hasta la próxima!</p>
						<Link to="/" className="mt-6 flex justify-center">
							<button onClick={deleteCart} className="font-medium text-xxs tracking-wider leading-normal uppercase select-none focus:outline-none text-white bg-gray-700 focus:ring-transparent w-40 text-center py-3 cursor-pointer">
								Volver al inicio
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
  )
}
export default Checkout