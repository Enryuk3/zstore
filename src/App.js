import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import CartContextProvider from "./components/context/CartContext";
import AppContextProvider from "./components/context/AppContext";

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
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;
