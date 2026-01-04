import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit(){
    const params = useParams();
    const [title,setTitle] = useState('');
    const [description,setDescr] = useState('');
    const [price,setPrice] = useState('');
    const navigate = useNavigate();
    return(
        <>
            <h1>Edit Page #{params.num}</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                axios.put(`http://localhost:9000/products/${params.num}`,{
                    title,
                    description,
                    price
                })
                .then(data => navigate('/products'))
            }}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={(e) => {
                setTitle(e.target.value)
            }}/>
            <label htmlFor="dec">Description</label>
            <input type="text" id="dec" onChange={(e) => {
                setDescr(e.target.value);
            }}/>
            <label htmlFor="p">Price</label>
            <input type="number" id="p" onChange={(e) => {
                setPrice(e.target.value);
            }}/>
            <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        </>
    )
}

export default Edit;