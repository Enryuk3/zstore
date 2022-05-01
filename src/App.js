import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Routes >
       <Route path='/' element={ <ItemListContainer/> } />
       <Route path='/shop/:categoryId' element={ <ItemListContainer/> } />
       <Route path='/shoes/:shoesId' element={ <ItemDetailContainer/> } />    
       <Route path='/all' element={ <ItemListContainer />} />
     </Routes>
     <Footer />
    </BrowserRouter>

  );
}

export default App;
