import { useState } from "react";
import axios from 'axios';
import { Route, Routes, useNavigate } from "react-router-dom";
import Products from "./Products";
function Add(){
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState(0);
    const [description,setDescr] = useState('');
    const navigate = useNavigate();
    return(
        <>
            <h2>Add</h2>
            <form onSubmit={(e)=>{
                e.preventDefault();
                axios.post('http://localhost:9000/products',{
                    title,
                    description,
                    price
                }).then(data => {
                    console.log(data);
                    navigate('/products');

                })
                // fetch('http://localhost:9000/products',{
                //     method:'POST',
                //     body:JSON.stringify({
                //         title,
                //         description,
                //         price
                //     })
                // }).then(res => res.json()).then(data => console.log(data))
            }}>
                {/* <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Product Id</label>
                    <input type="text" className="htmlForm-control" id="id" aria-describedby="Product Id" onChange={(e) => setId(e.target.value)}/>
                </div> */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Product Title</label>
                    <input type="text" className="htmlForm-control" id="title" aria-describedby="Product Title" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Product Description</label>
                    <input type="text" className="htmlForm-control" id="Descr" aria-describedby="Product Descr" onChange={(e) => setDescr(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Price</label>
                    <input type="number" className="htmlForm-control" id="price" aria-describedby="Product Price" onChange={(e) => setPrice(e.target.value)}/>
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
                    <input type="password" className="htmlForm-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 htmlForm-check">
                    <input type="checkbox" className="htmlForm-check-input" id="exampleCheck1"/>
                    <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </>
    );
}


export default Add;