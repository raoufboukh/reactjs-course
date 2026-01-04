
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import { deposite, withdraw } from './components/action';
import { Products } from './components/products';
import { deposite, withdraw } from './components/rtk/slice/slice';
import { addProduct } from './components/rtk/slice/prodSlice';


function App() {
  const state = useSelector(state => state.bank);
  const dispatch = useDispatch();
  const stateP = useSelector(state => state.products);
  // console.log(stateP);
  // console.log(state);
  return (
    <div className="App">
      <p>account: {state}</p>
      <button onClick={() => dispatch(withdraw(100))}>withdraw</button>
      <button onClick={() => dispatch(deposite(100))}>deposite</button>
      <button onClick={() => dispatch(addProduct({id:2, title:"raouf"}))}>ADD</button>

      <Products/>
    </div>
  );
}

export default App;
