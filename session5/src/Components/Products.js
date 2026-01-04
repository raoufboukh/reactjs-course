import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import './products.css';
function Products(){
    const [prod,setProd] = useState([]);
    useEffect(() => {
        getAll();
    },[])
    const getAll = () =>{
        fetch('http://localhost:9000/products')
        .then(res => res.json())
        .then(data => setProd(data));
    }
    const deletePro = (pro) =>{
        Swal.fire({
            title: `Are You Sure To Delete ${pro.title}?`,
            showCancelButton:true,
        }).then((data) => {
            if(data.isConfirmed){
                fetch(`http://localhost:9000/products/${pro.id}`,{
                    method: "DELETE"
                }).then(res => res.json())
                .then(() => getAll());
            }
        });
    }
    return(
        <>
            <h1>Products Page</h1>
            <Link to={'/products/add'} className="btn btn-success">Add New Products</Link>
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Product Price</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {prod.map((pro) => {
                        return (
                            <tr key={pro.id}>
                                <td>{pro.id}</td>
                                <td>{pro.title}</td>
                                <td>{pro.description.slice(0,30)}...</td>
                                <td>{pro.price}$</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => deletePro(pro)}>Delete</button>
                                    <Link to={`${pro.id}`} className="btn btn-info btn-sm">View</Link>
                                    <Link to={`edit/${pro.id}`} className="btn btn-primary btn-sm">Edit</Link>
                                </td>   
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}


export default Products;