import { useState } from "react"
import { Link } from "react-router-dom"
import CartWidget from "./Cardwidget"

function Navbar() {
  let [open, setOpen] = useState(false)
  return (
    <div className=" lg:sticky flex flex-wrap items-center justify-between p-6 bg-indigo-600 relative z-50">
      <div  className="block md:hidden z-auto cursor-pointer">
        <button onClick={() =>setOpen(!open)} id="button" className="flex items-center px-3 py-2 text-white hover:border border-white rounded ">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="flex-1">
        <li className="text-xl text-center normal-case btn btn-ghost text-white" ><Link to='/'>Z Store</Link></li>
      </div>
      
      <div id="menu" className={`w-full left-0 bg-indigo-600 z-10 absolute md:static flex-grow block md:flex md:items-center md:w-auto transition-all duration-500 ease-in ${open ? 'top-[96px] opacity-100':'top-[-490px] md:top-0 md:opacity-100 opacity-0'}`}>
        <li className="block text-center px-3 py-2 text-base font-medium text-gray-300 rounded-md btn-ghost hover:text-white"><Link to='/shop/hombre'>Hombre</Link></li>
        <li className="block text-center px-3 py-2 text-base font-medium text-gray-300 rounded-md btn-ghost hover:text-white"><Link to='/shop/mujer'>Mujer</Link></li>
        <li className="block text-center px-3 py-2 text-base font-medium text-gray-300 rounded-md btn-ghost hover:text-white"><Link to='/shop/kids'>Niños</Link></li>
        <li className="block text-center px-3 py-2 text-base font-medium text-gray-300 rounded-md btn-ghost hover:text-white"><Link to='/all'>ALL</Link></li> 
      </div>
      <div className="inline-block px-4 py-2 text-sm leading-none text-white rounded hover:border-transparent lg:mt-0">
        <CartWidget />
      </div>
      <div >
      </div>
    </div>
  )
}
export default Navbar
