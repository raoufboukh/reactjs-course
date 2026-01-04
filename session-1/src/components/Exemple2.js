function Product(props){
    return (
        <div className="product">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <span>{props.price}</span>
        </div>
    )
}

export default Product;