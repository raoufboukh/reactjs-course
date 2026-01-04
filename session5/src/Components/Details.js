import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './products.css';
function Details(){
    const params = useParams();
    // console.log(params);
    const [pro,setPro] = useState([])
    useEffect(() => {
        fetch(`http://localhost:9000/products/${params.details}`)
        .then(res => res.json())
        .then(data => setPro(data));
    },[])
    return (
        <>
            <h1>Product Details #{params.details}</h1>
            <img src={pro.image}/>
            <h2>{pro.title}</h2>
            <p>{pro.description}</p>
            <p>Category: {pro.category}</p>
            <p>Price: {pro.price}$</p>
        </>
    )

}


export default Details;