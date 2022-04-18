
import './App.css';
import Footer from './components/Footer';
import NavbarDaisy from './components/NavbarDaisy';
import Productos from './components/Productos';

function App() {
  return (
    <div className="App">
     <NavbarDaisy />
     <Productos />
     <Footer />
    </div>
  );
}

export default App;