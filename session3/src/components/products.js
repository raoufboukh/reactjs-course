import { useEffect, useState } from 'react';
import './navbar.css';
import Product from './product';
function Products(){
    const [prod,setProd] = useState([]);
    const [cat,setCat] = useState([]);
    const getProd = () =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProd(data))
    }

    const getCat = () =>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => setCat(data))
    }

    const getP = (ca) =>{
        fetch(`https://fakestoreapi.com/products/category/${ca}`)
        .then(res => res.json())
        .then(data => setProd(data));
    }

    useEffect(()=>{
        getProd();
        getCat();
    },[])
    return(
        <div className="products">
            <h2>Our Products</h2>
            <button onClick={()=> getProd()}>All</button>
                {cat.map(ca => {
                    return(
                            <button onClick={() => {
                                getP(ca);
                            }}>{ca}</button>
                    )
                })}
            <div className='container'>
                {prod.map((product) => {
                    return(
                        <>
                            <Product product={product} showButton={true}/>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Products;