import { Link } from "react-router-dom"
import CartWidget from "./Cardwidget"

function Navbar() {
  return (
    <div className="sticky top-0 z-10 navbar bg-base-100">
      <div className="flex-1">
        <li className="text-xl normal-case btn btn-ghost" ><Link to='/'>Z Store</Link></li>
      </div>
      <div className="flex-1 space-x-4 list-none">
        <li className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"><Link to='/shop/hombre'>Hombre</Link></li>
        <li className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"><Link to='/shop/mujer'>Mujer</Link></li>
        <li className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"><Link to='/shop/kids'>Niños</Link></li>
        <li className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"><Link to='/all'>ALL</Link></li>
      </div>
      <div className="flex-none">
        <CartWidget />
      </div>
    </div>
  )
}
export default Navbar
