import { useEffect, useState } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){
    const [menu, setMenu] = useState(false);
    return(
        <>
        <header>
            <h1>Products</h1>
            <div className='links'>
                <i className="fa-solid fa-bars" onClick={() => setMenu(!menu)}></i>
                <ul className={menu ? 'show': null}>
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="About">About</Link></li>
                </ul>
            </div>
        </header>
        </>
    )
}

export default Navbar;