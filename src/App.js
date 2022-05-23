import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

import CartContextProvider from "./components/context/CartContext";
import AppContextProvider from "./components/context/AppContext";
import CartOrder from "./components/CartOrder";

function App() {
  return (
    <AppContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/shop/:categoryId" element={<ItemListContainer />} />
            <Route path="/shoes/:shoesId" element={<ItemDetailContainer />} />
            <Route path="/all" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/sendorder" element={<CartOrder/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;
