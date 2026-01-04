
import './App.css';
import { useState } from 'react';
import Product from './component/product';

function comp(value,co){
  if(co){
    value = '';
  }
}
function App() {
  const [logedin,setLogedIn] = useState(false);
  const [login,setLogin] = useState('Login');
  const arr = [{id:1,name:"html"},{id:2,name:"css"},{id:3,name:"js"},{id:1,name:"react"}];
  function logO(){
    if(logedin === true){
      setLogedIn(false);
      setLogin('Login');
    }else{
      setLogedIn(true);
      setLogin('Logout');
    }
  }
  let [word, setWord] = useState('');
  let [k,setK] = useState('');
  return (
    <div className="App">
      {/* <button onClick={() => {
        logO();
      }}>{login}</button>
      {logedin ? <h1>Welcome raouf</h1>:<h1>you are not logedin</h1>}
      <ul>
        {arr.map(li => <li key={li.id}>{li.name}</li>)}
      </ul> */}
      <form onSubmit={(e) => {
                e.preventDefault();
                setWord(k);
            }}>
            <input type='text' placeholder='enter your category' onChange={(e) => {
              setK(e.target.value);
            }}/>
            <input type='submit'/>
            </form>
      
      <Product category={word}/>
    </div>
  );
}

export default App;