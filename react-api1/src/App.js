
import { Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Contact from "./Components/Contact"
import Navigation from "./Components/Navigation";
import ProductList from "./Components/ProductList";

function App() {
  return( <div className="App">
  <Navigation/>
  <Routes>
  <Routes path="/" element={<Home />} />
  <Routes path="/contacts" element={<Contact/>} />
  <Routes path="/products" element={<ProductList/>} />
  </Routes>
  </div>
  );
  
}

export default App;
