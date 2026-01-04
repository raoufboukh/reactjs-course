import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories(){
    const [cat,setCat] = useState([]);
    const [prod,setProd] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:9000/categories`)
        .then(res => res.json()).then(data => setCat(data));
        fetch('http://localhost:9000/products')
        .then(res => res.json())
        .then(data => setProd(data));
    },[])
    return(
        <>
            <h1>Categories Page</h1>
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        {cat.map(ca => {
                            return <th key={ca.id}>{ca.name}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        // cat.map((ca) =>{
                            <tr>
                                {cat.map((ca) => {
                                    return (<td key={ca.id}>
                                        {prod
                                            .filter(pro => pro.category === ca.name)
                                            .map(fit => {
                                                return <p key={fit.id}>
                                                    {fit.title} <Link to={`/products/${fit.id}`} className="btn btn-info">View</Link>
                                                    </p>
                                            })
                                        }
                                    </td>)
                                })}
                            </tr>
                                // return(
                                //     <tr>
                                //         <td>{pro.title}</td>
                                //     </tr>
                                // )
                            // })
                    } 
                    
                    
                </tbody>
            </table>
        </>
    )
}

export default Categories;