import { useParams } from "react-router-dom";
import Product from "./product";
import { useEffect, useState } from "react";
import './Details.css';
function Details(){
    const params = useParams();
    const [prod,setProd] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.pro}`)
        .then(resp => resp.json())
        .then(data => setProd(data))
    },[])
    return(
        <div className="Details"><Product product={prod} showButton={false}/></div>
    )
}


export default Details;