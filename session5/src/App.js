import Navbar from './Components/navbar';
import Sidebar from './Components/Sidebar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Add from './Components/Add';
import Details from './Components/Details';
import Edit from './Components/edit';
import Categories from './Components/categories';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='row'>
      <div className='col-2 sidebar'>
        <Sidebar/>
      </div>
      <div className="col-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/add" element={<Add />} />
        <Route path="products/:details" element={<Details />} />
        <Route path='/products/edit/:num' element={<Edit/>}/>
        <Route path='/categories' element={<Categories/>}/>
      </Routes>
      </div>

      </div>

    </div>
  );
}

export default App;
