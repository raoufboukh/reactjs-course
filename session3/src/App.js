import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/slider';
import Products from './components/products';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<><Slider/> <Products/></> }/>
        <Route path="About" element={<About/>}/>
        <Route path='product/:pro' element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
