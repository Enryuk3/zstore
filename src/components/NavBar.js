function NavBar() {
  return (
    <header className="w-full sticky top-0 z-10">
      <nav className="bg-black">
        <div className="mx-auto py-2 sm:py-4 px-2 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex items-center custom-position-logo ">
                <a href="/">
                  <span className="text-white font-bold">ZSTORE</span></a> 
              </div>
              <div className="hidden sm:flex items-center sm:ml-6 sm:pl-4">
                <div className="flex space-x-4">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/">Polos</a>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/">Casacas</a>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/">Pantalones</a>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/">Camisas</a>
                </div>
              </div>
            </div>
            <div>
                <a href="/">
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium text-base">Carrito</div>
                </a>
              </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default NavBar