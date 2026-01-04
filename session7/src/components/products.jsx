
import { useDispatch, useSelector } from "react-redux"
import { addProduct, fetchProd } from "./action";
import { useEffect } from "react";
import { fetchProducts } from "./rtk/slice/prodSlice";

export function Products(){
    const stateProd = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    // const [prod,setProd] = useState([]);
    // console.log(stateProd);
    // dispatch(addProduct({id:2, name:'product2'}));
    return (
        <>
            <h1>Products</h1>
            {/* <button onClick={() => dispatch(addProduct({id:21, title:'product21'}))}>add</button> */}
            {
                stateProd.map((pro) => <h3 key={pro.id}>{pro.title}</h3>)
            }
        </>
    )
}