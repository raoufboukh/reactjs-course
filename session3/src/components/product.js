import { Link } from "react-router-dom";

function Product(props){
    // console.log(props);
    return(
            <div key={props.product.id} className="card">
                <img src={props.product.image}/>
                <h4>{props.product.title}</h4>
                <p>{props.product.description}</p>
                {props.showButton && <Link to={`product/${props.product.id}`}>Details</Link>}
            </div>
        //     <div key={props.product.id} className="card">
        //     <img src={props.product.image}/>
        //     <h4>{props.product.title}</h4>
        //     <p>{props.product.description}</p>
        //     {props.showButton && <Link to={`product/${props.product.id}`}>Details</Link>}
        // </div>
    )
}



export default Product;