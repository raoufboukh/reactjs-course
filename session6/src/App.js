import { createContext,useState } from 'react';
import './App.css';
import Products from './components/products';
// import ProductsCont from './components/ProductsContext';

// export const ProductsContext = createContext();
function App() {
  // const [products,setProducts] = useState([
  //   {id:1 , name:"Product 1"},
  //   {id:2 , name:"Product 2"},
  //   {id:3 , name:"Product 3"},
  // ])
  return (
    <div className="App">
      {/* <ProductsContext.Provider value={products}>
      </ProductsContext.Provider> */}
      {/* <ProductsCont> */}
        <Products/>
      {/* </ProductsCont> */}
    </div>
  );
}

export default App;
