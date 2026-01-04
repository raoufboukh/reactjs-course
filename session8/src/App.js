import { Route, Routes } from 'react-router';
import Cards from './components/card';
import Products from './components/products';
import BasicExample from './components/navbar';

function App() {
  return (
    <div className="App">
      <BasicExample/>
      <Routes>
        <Route path='/card' element={<Cards/>}/>
        <Route path='/' element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
